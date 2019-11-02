import React from 'react';

import { 
    Pagination,
    PaginationItem,
    PaginationLink,
    Card,
    CardFooter,
    Table
} from '../../../commons/components/airDashboard/';

import {
    TrTableProjectsList
} from "./components/TrTableProjectsList";

const ProjectsList = () => (
    <Card className="mb-3">
        { /* START Table */}
        <div className="table-responsive-xl">
            <Table className="mb-0" hover>
                <thead>
                    <tr>
                        <th className="align-middle bt-0">Star</th>
                        <th className="align-middle bt-0">Project</th>
                        <th className="align-middle bt-0">Status</th>
                        <th className="align-middle bt-0">Tasks Completed</th>
                        <th className="align-middle bt-0">People</th>
                        <th className="align-middle bt-0 text-right">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <TrTableProjectsList />
                </tbody>
            </Table>
        </div>
        { /* END Table */}
        <CardFooter className="d-flex justify-content-center pb-0">
            <Pagination aria-label="Page navigation example">
                <PaginationItem>
                    <PaginationLink previous href="google.com">
                        <i className="fa fa-fw fa-angle-left"></i>
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem active>
                    <PaginationLink href="google.com">
                        1
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="google.com">
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="google.com">
                        3
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next href="google.com">
                        <i className="fa fa-fw fa-angle-right"></i>
                    </PaginationLink>
                </PaginationItem>
            </Pagination>
        </CardFooter>
    </Card>
);

export default ProjectsList;
