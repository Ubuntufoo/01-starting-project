import { useState } from 'react';
import { EXAMPLES } from '../data';
import Section from './Section';
import TabButton from './TabButton';
import Tabs from './Tabs';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleTabSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  let tabContent = <p>Please choose a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>);
  }


  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
        <>
          <TabButton onClick={() => handleTabSelect('components')} isSelected={selectedTopic === 'components'}>
            Components
          </TabButton>
          <TabButton onClick={() => handleTabSelect('jsx')} isSelected={selectedTopic === 'jsx'}>
            JSX
          </TabButton>
          <TabButton onClick={() => handleTabSelect('props')} isSelected={selectedTopic === 'props'}>
            Props
          </TabButton>
          <TabButton onClick={() => handleTabSelect('state')} isSelected={selectedTopic === 'state'}>
            State
          </TabButton>
        </>}>
        {tabContent}
      </Tabs>
    </Section>
  )
}