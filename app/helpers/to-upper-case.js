import { helper } from '@ember/component/helper';

export function toUpperCase([value]) {
  return value ? value.toUpperCase() : '';
}

export default helper(toUpperCase);
