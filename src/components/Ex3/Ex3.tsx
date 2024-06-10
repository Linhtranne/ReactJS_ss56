import React, { useEffect } from 'react';
import { getProductById } from './getProduct';

const Ex3: React.FC = () => {
  useEffect(() => {
    const fetchProduct = async () => {
      const productId = 1; // Thay bằng ID sản phẩm muốn tìm
      const product = await getProductById(productId);
      if (!product) {
        console.log("Không tìm thấy bản ghi");
      }
    };

    fetchProduct();
  }, []);

  return (
    <div>
    </div>
  );
};

export default Ex3;
