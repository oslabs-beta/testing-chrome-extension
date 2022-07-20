import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { dracula } from '@uiw/codemirror-theme-dracula';
import CopyButton from '../components/CopyButton';
import ExportButton from '../components/ExportButton';
import { useEffect, useState } from 'react';

interface testProps {
  tests: string,
  setTests?: (string: string) => void
}

const TestsView = (props: testProps) => {
  const {tests} = props;

  // useEffect()

  return (
    <section id="testsView">
      <CodeMirror
        placeholder={'//No tests yet :('}
        value={tests}
        theme={dracula}
        height='400px'
        width='400px'
        extensions={[javascript({ jsx: true })]}
      />
      <CopyButton text={tests} />
      <ExportButton text={tests} />
    </section>);
};

export default TestsView;