import type {
  ComplexityLevel,
  PricingConfig,
  PricingFormData,
  ProjectType,
  Timeline,
} from "@/types/content";

const findProjectType = (config: PricingConfig, value: ProjectType) =>
  config.projectTypes.find(option => option.value === value);

const findTimeline = (config: PricingConfig, value: Timeline) =>
  config.timelines.find(option => option.value === value);

const findComplexity = (config: PricingConfig, value: ComplexityLevel) =>
  config.complexityLevels.find(option => option.value === value);

export function calculateEstimate(formData: PricingFormData, config: PricingConfig) {
  const projectType = findProjectType(config, formData.projectType);
  const timeline = findTimeline(config, formData.timeline);
  const complexity = findComplexity(config, formData.complexity);

  if (!projectType || !timeline || !complexity) {
    return 0;
  }

  const featuresCost = config.features.reduce((total, feature) => {
    return formData.features[feature.key] ? total + feature.price : total;
  }, 0);

  return Math.round(
    (projectType.basePrice + featuresCost) * complexity.multiplier * timeline.multiplier
  );
}

export function getComplexityLabel(value: ComplexityLevel, config: PricingConfig) {
  return findComplexity(config, value)?.label ?? "Simple";
}
