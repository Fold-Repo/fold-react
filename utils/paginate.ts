/**
 * Represents the structure of a paginated response.
 */
export interface PaginatedResult<T> {
    data: T[];
    currentPage: number;
    totalPages: number;
    totalItems: number;
}

/**
 * Options for pagination.
 */
interface PaginateOptions {
    page?: number;
    limit?: number;
}

/**
 * Paginates an array of items based on page number and limit.
 * 
 * @param items - The full list of items to paginate.
 * @param options - Pagination options (page and limit).
 * @returns A paginated result containing the current slice of items and metadata.
 * 
 * @example
 * const result = paginate(users, { page: 2, limit: 5 });
 */
export function paginate<T>(
    items: T[],
    { page = 1, limit = 10 }: PaginateOptions
): PaginatedResult<T> {
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / limit);
    const start = (page - 1) * limit;
    const end = start + limit;

    return {
        data: items.slice(start, end),
        currentPage: page,
        totalPages,
        totalItems,
    };
}
