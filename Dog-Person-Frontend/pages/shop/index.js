import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ShopCard from "../../components/Shop/ShopCard";
import styles from "../../styles/shop.module.css";
import axios from "axios";
const shop = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const router = useRouter();
  useEffect(() => {
    if (
      router?.query?.type !== undefined &&
      router?.query?.subtype !== undefined &&
      router?.query?.page !== undefined
    ) {
      setPage(router?.query?.page);

      axios
        .get(
          `http://localhost:4000/products?type=${router?.query?.type}&subtype=${router?.query?.subtype}&page=${router?.query?.page}`
        )
        .then((res) => {
          setProducts(res.data);
          // setTotalPage(Math.ceil((res.data[0].total[0].count) / 20.0))
          // console.log(Math.ceil((res.data[0].total[0].count) / 20.0));
          // setTotalProduct(res.data[0].total[0].count)
        });
    }
  }, [router]);
  const handleIncrement = () => {
    let newPage = parseInt(page) + 1;
    router.push(
      `/shop?type=${router?.query?.type}&subtype=${router?.query?.subtype}&page=${newPage}`
    );
  };
  const handleDecrement = () => {
    let newPage = parseInt(page) - 1;
    router.push(
      `/shop?type=${router?.query?.type}&subtype=${router?.query?.subtype}&page=${newPage}`
    );
  };
  const handlePageClick = (page) => {
    router.push(
      `/shop?type=${router?.query?.type}&subtype=${router?.query?.subtype}&page=${page}`
    );
  };
  return (
    <div>
      <h2 style={{ marginLeft: "30px" }}>Search Results</h2>
      {/* Shop Container */}
      <div className={styles.shopContainer}>
        {
          // Loop through all products and getting details of them.
          // products.map(product =>
          //     // Calling Card component and passing dynamic values.
          //     <ShopCard name={product.name} ratingcount={product.rating} avgrating={product.avg_rating} image={product.picture} price={product.price} paragraph={product.about} id={product._id} />
          // )
          products?.map((product) => (
            <ShopCard
              image={product.picture}
              name={product.name}
              price={product.price}
              avgrating={product.avg_rating}
              ratingcount={product.rating}
              paragraph={product.about}
              id={product._id}
            />
          ))
        }
      </div>
      {/* Page count. */}
      {/* <div className={styles.pageIndicator}>Showing <span>{(page - 1) * 20}-{page * 20 <= totalProduct ? page * 20 : totalProduct}</span> of <span>{totalProduct}</span></div> */}
      {/* pagination */}
      <div className={styles.pagination}>
        {page != 1 && <button onClick={handleDecrement}>Previous</button>}
        <button
          onClick={() => {
            handlePageClick(1);
          }}
        >
          1
        </button>
        {
          // page != 2 && page != 1 &&
          // <div>...</div>
        }
        {page != 1 && page != totalPage && <button>{page}</button>}
        {
          // page != totalPage && page != totalPage - 1 &&
          // <div>...</div>
        }
        {/* <button onClick={() => { handlePageClick(totalPage) }}>
                    {totalPage}
                </button> */}
        {
          // page != totalPage &&
          <button onClick={handleIncrement}>Next</button>
        }
      </div>
    </div>
  );
};

export default shop;
