import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

export const Search = (props) => (
    <div class="container">
        <InputGroup>
            <InputGroupAddon addonType="prepend">Topic</InputGroupAddon>
            <Input placeholder="Topic..." />
        </InputGroup>
        <InputGroup>
            <InputGroupAddon addonType="prepend">Start Year</InputGroupAddon>
            <Input placeholder="Start year..." />
        </InputGroup>
        <InputGroup>
            <InputGroupAddon addonType="prepend">End Year</InputGroupAddon>
            <Input placeholder="End year..." />
        </InputGroup>
    </div>
);