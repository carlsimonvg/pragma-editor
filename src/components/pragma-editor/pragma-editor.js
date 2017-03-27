
import {customElement, bindable, inject} from 'aurelia-framework';
//import {monaco} from 'monaco-editor/min/vs/loader';

@customElement('pragma-editor')
@inject(Element)
export class PragmaEditor {
    element = null;
    @bindable language;

    constructor(element) {
        this.element = element;
    }

    attached(){
    }

    detached(){
        //unitialize everything here
    }

    languageChanged() {
    }
}
