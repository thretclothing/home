export enum Policy {
  TERMS = 'terms',
  PRIVACY = 'privacy'
}

export const isSupportedPolicy = (policyName: string): boolean =>
  Object.values(Policy).includes(Policy[policyName.toUpperCase() as keyof typeof Policy]);

export const toPolicy = (policyName: string): Policy => {
  if (!isSupportedPolicy(policyName)) {
    throw new Error(`Policy name: ${policyName} is not recognised`);
  }
  return Policy[policyName.toUpperCase() as keyof typeof Policy];
};
