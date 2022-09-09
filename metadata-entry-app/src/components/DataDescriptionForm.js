import React from 'react'
import Form from '@rjsf/core'
import SaverHelpers from './SaveHelpers'
import 'bootstrap/dist/css/bootstrap.min.css';

class DataDescriptionForm extends SaverHelpers {
    constructor(props) {
        super(props);

        const data_json = require('../schemas/data-description-schema.json')
        this.schema = data_json;
    }
    
    render() {
        return (
            <div>
                <Form schema={this.schema}
                      onSubmit={this.onSubmit}
                      formData={this.formData} >
                </Form>
            </div>
        )
    }
}

export default DataDescriptionForm;
