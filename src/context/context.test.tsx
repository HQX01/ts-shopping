import React, {useContext} from "react";
import {ProductContext, products} from "./context";
import {renderHook} from "@testing-library/react";

describe("ProductContext", () => {
    test("should create a context with initial products data", () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <ProductContext.Provider value={products}>{children}</ProductContext.Provider>
        );
        const { result } = renderHook(() => useContext(ProductContext), { wrapper });
        expect(result.current).toEqual(products);
    });

});
