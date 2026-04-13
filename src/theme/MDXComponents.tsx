import React, {type ReactNode} from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import Admonition from '@theme/Admonition';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './MDXComponents.module.css';

type ChildrenProps = {
  children?: ReactNode;
};

type CardProps = ChildrenProps & {
  href?: string;
  title?: string;
};

type AccordionProps = ChildrenProps & {
  title?: string;
};

type FieldProps = ChildrenProps & {
  body?: string;
  header?: string;
  name?: string;
  path?: string;
  query?: string;
  type?: string;
  required?: boolean;
};

function AdmonitionBlock({
  children,
  type,
  title,
}: ChildrenProps & {
  type: 'info' | 'note' | 'tip' | 'warning';
  title: string;
}) {
  return (
    <Admonition type={type} title={title}>
      {children}
    </Admonition>
  );
}

function CardGroup({children}: ChildrenProps) {
  return <div className={styles.cardGroup}>{children}</div>;
}

function Card({children, href, title}: CardProps) {
  if (!href) {
    return (
      <div className={styles.card}>
        <strong>{title}</strong>
        <div>{children}</div>
      </div>
    );
  }

  const isExternal = /^https?:\/\//.test(href);
  return (
    <Link className={styles.card} href={isExternal ? href : undefined} to={isExternal ? undefined : href}>
      <strong>{title}</strong>
      <div>{children}</div>
    </Link>
  );
}

function Accordion({children, title}: AccordionProps) {
  return (
    <details className={styles.accordion}>
      <summary>{title}</summary>
      <div>{children}</div>
    </details>
  );
}

function Field({children, body, header, name, path, query, required, type}: FieldProps) {
  const label = path ?? query ?? header ?? body ?? name ?? 'field';
  return (
    <div className={styles.field}>
      <div className={styles.fieldHeader}>
        <code>{label}</code>
        <span>{type ?? 'value'}</span>
        {required ? <span className={styles.required}>required</span> : null}
      </div>
      <div className={styles.fieldBody}>{children}</div>
    </div>
  );
}

export default {
  ...MDXComponents,
  Accordion,
  Card,
  CardGroup,
  Info: (props: ChildrenProps) => <AdmonitionBlock {...props} type="info" title="Info" />,
  Note: (props: ChildrenProps) => <AdmonitionBlock {...props} type="note" title="Note" />,
  ParamField: (props: FieldProps) => <Field {...props} />,
  ResponseField: (props: FieldProps) => <Field {...props} />,
  Tabs: (props: ChildrenProps) => <div className={clsx(styles.tabs)}>{props.children}</div>,
  Tab: ({children, title}: AccordionProps) => (
    <section className={styles.tabPanel}>
      <div className={styles.tabLabel}>{title ?? 'Tab'}</div>
      {children}
    </section>
  ),
  Tip: (props: ChildrenProps) => <AdmonitionBlock {...props} type="tip" title="Tip" />,
  Warning: (props: ChildrenProps) => <AdmonitionBlock {...props} type="warning" title="Warning" />,
};
