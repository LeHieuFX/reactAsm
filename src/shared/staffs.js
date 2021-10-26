export const DEPARTMENTS =
    [
        {
            id: "Dept01",
            name: "Sale",
            numberOfStaff: 1
        },
        {
            id: "Dept02",
            name: "HR",
            numberOfStaff: 3
        },
        {
            id: "Dept03",
            name: "Marketing",
            numberOfStaff: 2
        },
        {
            id: "Dept04",
            name: "IT",
            numberOfStaff: 1
        },
        {
            id: "Dept05",
            name: "Finance",
            numberOfStaff: 11
        }
    ]
export const ROLES = {
    NORMAL_STAFF: "Nhân viên",
    MANAGER_STAFF: "Quản lý"
}
export const STAFFS =
    [
        {
            id: 0,
            name: "Bill Gates",
            doB: "1999-01-01T08:59:00.000Z",
            salaryScale: 1.1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[0],
            annualLeave: 1,
            overTime: 1,
            image: '/assets/images/person-1.jpg',
            role: ROLES.MANAGER_STAFF
        },
        {
            id: 1,
            name: "Jeff Bezos",
            doB: "2000-01-01T08:59:00.000Z",
            salaryScale: 1.2,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[1],
            annualLeave: 2,
            overTime: 3,
            image: '/assets/images/person-2.jpg',
            role: ROLES.MANAGER_STAFF
        },
        {
            id: 2,
            name: "Sergey Brin",
            doB: "2001-01-01T08:59:00.000Z",
            salaryScale: 1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[3],
            annualLeave: 4,
            overTime: 5,
            image: '/assets/images/person-3.jpg',
            role: ROLES.MANAGER_STAFF
        },
        {
            id: 3,
            name: "Larry Page",
            doB: "2002-01-01T08:59:00.000Z",
            salaryScale: 1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[2],
            annualLeave: 6,
            overTime: 7,
            image: '/assets/images/person-4.jpg',
            role: ROLES.MANAGER_STAFF
        },
        {
            id: 4,
            name: "Elon Musk",
            doB: "1999-01-01T08:59:00.000Z",
            salaryScale: 1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[2],
            annualLeave: 8,
            overTime: 1,
            image: '/assets/images/person-5.jpg',
            role: ROLES.MANAGER_STAFF
        },
        {
            id: 5,
            name: "Mark Zuckerberg",
            doB: "2003-01-01T08:59:00.000Z",
            salaryScale: 1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[4],
            annualLeave: 9,
            overTime: 10,
            image: '/assets/images/person-6.jpg',
            role: ROLES.MANAGER_STAFF
        },
        {
            id: 6,
            name: "Adam Mosseri",
            doB: "2003-01-01T08:59:00.000Z",
            salaryScale: 1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[4],
            annualLeave: 9,
            overTime: 10,
            image: '/assets/images/person-7.jpg',
            role: ROLES.NORMAL_STAFF
        },
        {
            id: 7,
            name: "Jack Dorsey",
            doB: "2003-01-01T08:59:00.000Z",
            salaryScale: 1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[2],
            annualLeave: 9,
            overTime: 10,
            image: '/assets/images/person-8.jpg',
            role: ROLES.NORMAL_STAFF
        },
        {
            id: 8,
            name: "Barack Obama",
            doB: "2003-01-01T08:59:00.000Z",
            salaryScale: 1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[3],
            annualLeave: 9,
            overTime: 10,
            image: '/assets/images/person-9.jpg',
            role: ROLES.NORMAL_STAFF
        },
        {
            id: 9,
            name: "Olivia Trump",
            doB: "2003-01-01T08:59:00.000Z",
            salaryScale: 1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[4],
            annualLeave: 9,
            overTime: 10,
            image: '/assets/images/person-10.jpg',
            role: ROLES.NORMAL_STAFF
        },
        {
            id: 10,
            name: "Emma Watson",
            doB: "2003-01-01T08:59:00.000Z",
            salaryScale: 1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[4],
            annualLeave: 9,
            overTime: 10,
            image: '/assets/images/person-11.jpg',
            role: ROLES.NORMAL_STAFF
        },
        {
            id: 11,
            name: "Ava Max",
            doB: "2003-01-01T08:59:00.000Z",
            salaryScale: 1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[4],
            annualLeave: 9,
            overTime: 10,
            image: '/assets/images/person-12.jpg',
            role: ROLES.NORMAL_STAFF
        },
        {
            id: 12,
            name: "Sophia Lillis",
            doB: "2003-01-01T08:59:00.000Z",
            salaryScale: 1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[4],
            annualLeave: 9,
            overTime: 10,
            image: '/assets/images/person-13.jpg',
            role: ROLES.NORMAL_STAFF
        },
        {
            id: 13,
            name: "Amelia Bones",
            doB: "2003-01-01T08:59:00.000Z",
            salaryScale: 1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[4],
            annualLeave: 9,
            overTime: 10,
            image: '/assets/images/person-14.jpg',
            role: ROLES.NORMAL_STAFF
        },
        {
            id: 14,
            name: "Mia Farrow",
            doB: "2003-01-01T08:59:00.000Z",
            salaryScale: 1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[4],
            annualLeave: 9,
            overTime: 10,
            image: '/assets/images/person-15.jpg',
            role: ROLES.NORMAL_STAFF
        },
        {
            id: 15,
            name: "Harper Beckham",
            doB: "2003-01-01T08:59:00.000Z",
            salaryScale: 1,
            startDate: "2019-04-30T08:59:00.000Z",
            department: DEPARTMENTS[4],
            annualLeave: 9,
            overTime: 10,
            image: '/assets/images/person-16.jpg',
            role: ROLES.NORMAL_STAFF
        },

    ]