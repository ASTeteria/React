import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {apiService} from "../services/api.service";

type PaginationProps = { dot: boolean };
const PaginationComponent: FC<PaginationProps> = ({dot}) => {
    const [query, setQuery] = useSearchParams({page: '1'});


    const onclickPrevHandler = () => {
        const page = query.get('page');
        if (page && +page > 0) {
            let currentPage = +page;
            currentPage--;
            setQuery({page: currentPage.toString()});
        }
    };
    const onclickNextHandler = () => {

        const page = query.get('page');
        if (page) {
            let currentPage = +page;
            currentPage++;
            setQuery({page: currentPage.toString()});
        }

    };
    return (
        <div>

            <button onClick={onclickPrevHandler}>prev</button>
            <button onClick={onclickNextHandler} disabled={dot}>next</button>
        </div>
    );
};

export default PaginationComponent;