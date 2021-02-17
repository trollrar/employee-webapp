export * from './employeeController.service';
import { EmployeeControllerService } from './employeeController.service';
export * from './userController.service';
import { UserControllerService } from './userController.service';
export const APIS = [EmployeeControllerService, UserControllerService];
