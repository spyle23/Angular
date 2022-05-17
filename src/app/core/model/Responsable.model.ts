

    export interface Responsible {
        id: number;
        firstName: string;
        lastName: string;
    }

    export interface Client {
        id: number;
        companyName: string;
    }

    export interface PaymentMethod {
        id: number;
        label: string;
    }

    export interface FrequenceRemboursement{
        id:number;
        interval:string;
    }

    export interface DatasClient {
        responsibles: Responsible[];
        clients: Client[];
        paymentsMethods: PaymentMethod[];
        frequencesRemboursement: FrequenceRemboursement[];
    }

