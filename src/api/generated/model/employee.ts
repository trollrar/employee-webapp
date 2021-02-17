/**
 * Spring Boot REST API
 * Main rest api
 *
 * OpenAPI spec version: 1.0-SNAPSHOT
 * Contact: vladimirseme@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface Employee { 
    creationDate?: Date;
    employees?: Array<Employee>;
    firstName?: string;
    id?: number;
    lastName?: string;
    position?: Employee.PositionEnum;
    supervisor?: Employee;
}
export namespace Employee {
    export type PositionEnum = 'OTHER' | 'OFFICE' | 'CUSTOMER_SERVICE' | 'MANAGEMENT';
    export const PositionEnum = {
        OTHER: 'OTHER' as PositionEnum,
        OFFICE: 'OFFICE' as PositionEnum,
        CUSTOMERSERVICE: 'CUSTOMER_SERVICE' as PositionEnum,
        MANAGEMENT: 'MANAGEMENT' as PositionEnum
    };
}
