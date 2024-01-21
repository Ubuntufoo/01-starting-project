import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleTabSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
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
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.id} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleTabSelect('components')} isSelected={selectedTopic === 'components'}>Components</TabButton>
            <TabButton onSelect={() => handleTabSelect('jsx')} isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
            <TabButton onSelect={() => handleTabSelect('props')} isSelected={selectedTopic === 'props'}>Props</TabButton>
            <TabButton onSelect={() => handleTabSelect('state')} isSelected={selectedTopic === 'state'}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
