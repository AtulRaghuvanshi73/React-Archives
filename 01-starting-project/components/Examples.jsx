import {EXAMPLES} from "../src/data"
import Section from './Section'
import TabButton from "./TabButton";
import { useState } from "react";
import Tabs from "./Tabs";


export default function Examples(){

    let tabContent = <p>Please select a topic.</p>

    const [selectedTopic, setSelectedTopic] = useState(null);

    function handleSelect(selectedButton){
        setSelectedTopic(selectedButton);
      }
    
    function undoSelect(){
        setSelectedTopic(null);
    }

    if(selectedTopic){
    tabContent = (
        <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
            <code>
                {EXAMPLES[selectedTopic].code}
            </code> 
        </pre>
        </div>
    )
    }

    return(
        <Section title="Examples" id="examples">
                <Tabs
                    buttonsContainer="menu"
                button={
                    <menu>
                        <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
                    </menu>
                }
                >
                    {tabContent}
                </Tabs>
{/*     
                <section id="examples">
                <menu>
                    <TabButton
                    onClick={undoSelect}
                    >Undo Select</TabButton>
                </menu>
                </section> */}
        </Section>
         
    )
}