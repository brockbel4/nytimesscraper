import React from "react";
import {InputGroup, InputGroupAddon, Input, Button, Dropdown} from 'reactstrap';

export const Results = () => (
    <div>
        <InputGroup>
            <Input />
            <InputGroupAddon addonType="append">
            <Button color="secondary">Save</Button>
            </InputGroupAddon>
        </InputGroup>
    </div>
);