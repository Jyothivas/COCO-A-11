import { render } from "@testing-library/react-native";
import React from "react";
import {} from 'react-native';
import AgentsPic from "../components/AgentsPic";

describe('AgentsPic Components',()=>{
   
    test('AgentsPic components is defined',()=>{
        expect(AgentsPic).toBeDefined();
    });

    test('AgentsPic component render correctly',()=>{
        const agents={}
        const {getByTestId} = render(<AgentsPic agentsImages={agents} />)

        const AgentsFlatList = getByTestId('agentsFlatList');
        expect(AgentsFlatList).toBeDefined();

    })

    
})