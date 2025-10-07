package edu.infosys.lostAndFoundApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.infosys.lostAndFoundApplication.bean.LostFoundItem;
import edu.infosys.lostAndFoundApplication.dao.LostFoundItemDao;
import edu.infosys.lostAndFoundApplication.service.CampusUserService;
@RestController
@RequestMapping("/lost-found/")
@CrossOrigin(origins = "http://localhost:3939", allowCredentials = "true")
public class LostFoundItemController {
	@Autowired
	  private LostFoundItemDao lostFoundItemDao;
	  @Autowired
	  private CampusUserService service;
	  @GetMapping("/item")
	  public List<LostFoundItem> getAllItems(){
		  return lostFoundItemDao.findAll();
	  }
	  
	  @PostMapping("/item")
	  public void lostItemSubmission(@RequestBody LostFoundItem lostItem) {
		  lostItem.setFoundDate(null);
		  lostFoundItemDao.save(lostItem);
	  }
	  @PutMapping("/item")
	  public void foundItemSubmission(@RequestBody LostFoundItem lostItem) {
		   lostFoundItemDao.save(lostItem);
	  }
	  @GetMapping("/item/{id}")
	  public LostFoundItem getItemById(@PathVariable Long id){
		  return lostFoundItemDao.findById(id);
	  }
	  @DeleteMapping("/item/{id}")
	  public void deleteItemById(@PathVariable Long id) {
		  lostFoundItemDao.deleteById(id);
	  }
	 
	  @GetMapping("/id-gen")
		public Long itemIdGenerator() {
			return lostFoundItemDao.generateId();
		}
	  @GetMapping("/not-found")
		public List<LostFoundItem> lostItemList() {
			
			return lostFoundItemDao.lostItemList();
		}
	 
	  @GetMapping("/found")
		public List<LostFoundItem> foundItemList() {
			// TODO Auto-generated method stub
			return lostFoundItemDao.foundItemList();
		}
	 
	  @GetMapping("/lost")
	  public List<LostFoundItem> lostItemListByUser() {
	      String username = service.getUserId();
	      return lostFoundItemDao.lostItemListByUser(username);
	  }

	  @GetMapping("/lostfound")
	  public List<LostFoundItem> foundItemListByUser() {
	      String username = service.getUserId();
	      return lostFoundItemDao.foundItemListByUser(username);
	  }
      





}