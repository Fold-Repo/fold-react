"use client";

import { useQueryParams } from "@/hooks";
import { cn } from "@/lib";
import { Pagination as HeroPagination } from "@heroui/react";
import { useEffect, useState } from "react";

interface PaginationProps {
    initialPage?: number;
    total: number;
    perPage?: number;
    size?: "sm" | "md" | "lg";
    className?: string;
    onChange?: (page: number) => void;
    useQuery?: boolean; 
}

const Pagination: React.FC<PaginationProps> = ({
    initialPage = 1,
    total,
    perPage = 10,
    size = "sm",
    className,
    onChange,
    useQuery = true,
}) => {
    const { searchParams, updateQueryParams } = useQueryParams();
    const [currentPage, setCurrentPage] = useState(initialPage);

    useEffect(() => {
        if (useQuery) {
            const pageFromQuery = searchParams.get("page");
            if (pageFromQuery) {
                const pageNum = parseInt(pageFromQuery);
                if (!isNaN(pageNum)) {
                    setCurrentPage(pageNum);
                    return;
                }
            }
        }
        setCurrentPage(initialPage);
    }, [searchParams, initialPage, useQuery]);

    const totalPages = Math.ceil(total / perPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        if (useQuery) {
            updateQueryParams({ page });
        }
        onChange?.(page);
    };

    if (totalPages <= 1) return null;

    return (
        <div className={cn("flex justify-center", className)}>
            <HeroPagination
                color="primary"
                total={totalPages}
                page={currentPage}
                size={size}
                onChange={handlePageChange}
                showControls
            />
        </div>
    );
};

export default Pagination;
