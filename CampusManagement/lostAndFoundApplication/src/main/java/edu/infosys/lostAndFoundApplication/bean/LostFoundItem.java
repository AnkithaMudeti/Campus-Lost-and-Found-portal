package edu.infosys.lostAndFoundApplication.bean;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class LostFoundItem {

    @Id
    private Long itemId;

    private String username;
    private String userEmail;
    private String itemName;
    private String category;
    private String color;
    private String brand;
    private String location;
    private String lostDate;
    private String entryDate;
    private String foundDate;

    public LostFoundItem() {
    }

    public LostFoundItem(Long itemId, String username, String userEmail,String itemName,String category,String color,String brand,String location,
                         String lostDate, String entryDate, String foundDate) {
        this.itemId = itemId;
        this.username = username;
        this.userEmail=userEmail;
        this.itemName=itemName;
    	this.category=category;
    	this.color=color;
    	this.brand=brand;
    	this.location=location;
        this.lostDate = lostDate;
        this.entryDate = entryDate;
        this.foundDate = foundDate;
    }

	public Long getItemId() {
		return itemId;
	}

	public void setItemId(Long itemId) {
		this.itemId = itemId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getLostDate() {
		return lostDate;
	}

	public void setLostDate(String lostDate) {
		this.lostDate = lostDate;
	}

	public String getEntryDate() {
		return entryDate;
	}

	public void setEntryDate(String entryDate) {
		this.entryDate = entryDate;
	}

	public String getFoundDate() {
		return foundDate;
	}

	public void setFoundDate(String foundDate) {
		this.foundDate = foundDate;
	}

	@Override
	public String toString() {
		return "LostFoundItem [itemId=" + itemId + ", username=" + username + ", userEmail=" + userEmail + ", itemName="
				+ itemName + ", category=" + category + ", color=" + color + ", brand=" + brand + ", location="
				+ location + ", lostDate=" + lostDate + ", entryDate=" + entryDate + ", foundDate=" + foundDate + "]";
	}

}