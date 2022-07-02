import { IStore } from './../../helper/storeHelper';
import { action, makeObservable, observable } from 'mobx';

export type EstimateForm = {
    title: string;
    formNumber: number;
}

interface IEstimateStore {
    estimateForm: Array<EstimateForm> | undefined;
    formNumber: number;
};

const initialState: IEstimateStore = {
    estimateForm: [
        {
            title : '새로운 법인',
            formNumber: 1,
        },
    ],
    formNumber: 1,
};

class EstimateStore implements IStore {
    estimateForm = initialState.estimateForm;
    formNumber = initialState.formNumber;

    constructor() {
        makeObservable(this, {
            estimateForm: observable,
            formNumber: observable,

            addNewForm: action.bound,
            removeForm: action.bound,
            clear: action.bound,
        });
    };

    addNewForm() {
        this.formNumber += 1;
        this.estimateForm?.push({ 
            title: '새로운 법인',
            formNumber: this.formNumber,
        });
    }

    removeForm(targetForm: EstimateForm) {
        this.estimateForm = this.estimateForm?.filter((form) => form.formNumber !== targetForm.formNumber);
    }

    clear() {
        this.estimateForm = initialState.estimateForm;
    };
};

const estimateStore = new EstimateStore();
export default estimateStore;