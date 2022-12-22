// component template
export const component = name => `import s from './styles.module.css';

export function ${name} () {
  return (
    <div>Hello 👋, I am a ${name} component.</div>
  );
};
`;