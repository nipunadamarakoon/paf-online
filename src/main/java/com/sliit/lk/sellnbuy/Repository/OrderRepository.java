package com.sliit.lk.sellnbuy.Repository;

        import com.sliit.lk.sellnbuy.model.Order;
        import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<Order, Integer> {
//    void updateOrder(Order order);
    Order findOderById(int id);

}
