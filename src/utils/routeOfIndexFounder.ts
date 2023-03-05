export const routeOfIndexFounder = (index: number): Array<number> => {
    if (index < 0) return [];
    if (index === 0) return [0];
    if (index > 0 && index <= 2) return [0, index];
    return goToNestedRoute(index, [])
}

const goToNestedRoute = (index: number, preRoute: Array<number>): Array<number> => {
    let routes: Array<number> = preRoute;
    if (index >= 0) {
        routes.push(index);
    }
    if (index === 0) return routes;
    if (index % 2) {
        return goToNestedRoute(((index - 1) / 2), routes)
    } else {
        return goToNestedRoute(((index - 2) / 2), routes)
    }
}