const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

type Web3FormsFieldValue = string | number | boolean | null | undefined;

type SubmitWeb3FormOptions = {
  form: HTMLFormElement;
  subject: string;
  fields?: Record<string, Web3FormsFieldValue>;
};

type Web3FormsResponse = {
  success: boolean;
  message?: string;
};

export class Web3FormsError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "Web3FormsError";
    this.status = status;
  }
}

export function getWeb3FormsAccessKey() {
  return process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";
}

export async function submitWeb3Form({
  form,
  subject,
  fields,
}: SubmitWeb3FormOptions): Promise<Web3FormsResponse> {
  const accessKey = getWeb3FormsAccessKey();

  if (!accessKey) {
    throw new Web3FormsError(
      "Web3Forms access key is missing. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local and restart the dev server."
    );
  }

  const formData = new FormData(form);
  formData.set("access_key", accessKey);
  formData.set("subject", subject);

  if (fields) {
    for (const [key, value] of Object.entries(fields)) {
      if (value === null || value === undefined) {
        continue;
      }

      formData.set(key, String(value));
    }
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  const result = (await response.json().catch(() => null)) as Web3FormsResponse | null;

  if (!response.ok || !result?.success) {
    throw new Web3FormsError(
      result?.message ?? "Unable to submit the form right now. Please try again.",
      response.status
    );
  }

  return result;
}
