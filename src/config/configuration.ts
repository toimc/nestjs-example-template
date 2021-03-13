import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = 'config.yml';
const filePath = join(__dirname, YAML_CONFIG_FILENAME);
console.log('🚀 ~ file: configuration.ts ~ line 7 ~ filePath', filePath);

export default () => {
  return yaml.load(readFileSync(filePath, 'utf8'));
};
