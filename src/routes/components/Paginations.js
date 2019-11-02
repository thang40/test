import React from 'react';

import { 
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap';

const Paginations = () => (

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
)

export { Paginations };
