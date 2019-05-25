package com.sliit.lk.sellnbuy.controller;

import com.sliit.lk.sellnbuy.Repository.OrderRepository;
import com.sliit.lk.sellnbuy.model.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.*;

import javax.persistence.LockModeType;
import java.util.Date;
import java.util.Map;
import java.util.Optional;

@Controller
@CrossOrigin
@RequestMapping(path = "/order")
public class OrderController {
    @Autowired
    private OrderRepository orderRepository;

    @PostMapping("/add-order")
    public ResponseEntity<Object> addOrder(@RequestBody Map<String, String> body) {

        Order order = new Order();
        order.setOrderDate(new Date().toString());
        order.setProductId(Integer.parseInt(body.get("productId")));
        order.setQty(Integer.parseInt(body.get("qty")));
        order.setTotalBill(Integer.parseInt(body.get("totalBill")));

        Order savedOrder = orderRepository.save(order);
        return ResponseEntity
                .ok()
                .body("savedOrder " + savedOrder.getId());
    }

    @PostMapping("/delet-order")
    public void deletOder(@RequestBody Map<String, String> body) {
//        Long userId = Long.parseLong(id);
//        int oid = Integer.parseInt(body.get("id"));
        orderRepository.deleteById(Integer.parseInt(body.get("id")));
//        return true;
//
    }
    @GetMapping("/get-orders")
    public @ResponseBody Iterable<Order> getAllUsers(){
        //This returns a JSON or XML with the users
        return orderRepository.findAll();
    }

//    @PostMapping("/update-order")
//    public String updateOrder(@RequestBody Map<String, String> body){
//        String status = "";
//        Order order = orderRepository.findById(Integer.parseInt(body.get("productId")));
//        order.setOrderDate(new Date().toString());
//        order.setProductId(Integer.parseInt(body.get("productId")));
//        order.setQty(Integer.parseInt(body.get("qty")));
//        order.setTotalBill(Integer.parseInt(body.get("totalBill")));
//        try{
//            orderRepository.updateOrder(order);
//            status =  "Order updated successfully!!";
//        }catch (Exception e){
//            System.out.println(e);
//            status = "Order updated successfully!!";
//        }
//        return status;
//    }

}