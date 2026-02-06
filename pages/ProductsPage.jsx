import React, { useState, useEffect } from "react";
import { mockApi } from "../services/api";
import { Loader2, Plus, Grid, List } from "lucide-react";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    const data = await mockApi.getProducts();
    setProducts(data);
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Inventory</h1>
          <p className="text-slate-500 text-sm">
            Monitor your product catalog and stock.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex bg-slate-200 p-1 rounded-lg">
            <button className="p-1.5 bg-white rounded shadow-sm">
              <Grid className="w-4 h-4 text-slate-800" />
            </button>
            <button className="p-1.5 text-slate-600">
              <List className="w-4 h-4" />
            </button>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 hover:bg-blue-700">
            <Plus className="w-4 h-4" />
            <span>Add Product</span>
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2">
                  <span
                    className={`px-2 py-1 rounded-lg text-[10px] font-bold text-white uppercase ${p.stock < 20 ? "bg-red-500" : "bg-green-500"}`}
                  >
                    {p.stock < 20 ? "Low Stock" : "In Stock"}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-blue-600 font-semibold mb-1">
                  {p.category}
                </p>
                <h3 className="font-bold text-slate-800 truncate">{p.name}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-slate-900">
                    ${p.price}
                  </span>
                  <span className="text-xs text-slate-500">
                    {p.sales} units sold
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
