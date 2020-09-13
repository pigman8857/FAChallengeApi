import { Department } from './department.model';
import { Position } from './position.model';
export class EmployeeDetail {
    EmployeeId: number;
    Name: string;
    Salary: number;
    DepartmentId: number;
    Department: Department
    PositionId: number;
    Position: Position;
}
