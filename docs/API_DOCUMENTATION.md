# SAMBA LEAF — REST API Specifications

The SAMBA LEAF platform provides a suite of Next.js App Router HTTP endpoints to serve web clients, kitchen displays, and external integrations.

---

## 1. System Health & Diagnostics

### `GET /api/health`
Returns process uptime, Node.js runtime stats, memory usage, and operational status of sub-services.

#### Response `200 OK`
```json
{
  "status": "healthy",
  "service": "sambaleaf-web",
  "version": "2.1.0",
  "timestamp": "2026-11-12T15:52:00.000Z",
  "uptime": {
    "seconds": 3600,
    "formatted": "60m 0s"
  },
  "environment": "production",
  "nodeVersion": "v20.x",
  "memory": {
    "rssMb": 48.2,
    "heapUsedMb": 28.5,
    "heapTotalMb": 34.1
  },
  "services": {
    "woodfireDumHearth": "operational",
    "whatsappOrderGateway": "operational",
    "menuCatalog": "operational",
    "loyaltyEngine": "operational"
  }
}
```

---

## 2. Culinary Menu Catalog

### `GET /api/menu`
Returns the active menu items, prices, spice notes, and accompaniments.

#### Query Parameters
- `category` *(optional)*: Filter by `'biryani'` or `'accompaniment'`.

#### Response `200 OK`
```json
{
  "success": true,
  "count": 4,
  "items": [
    {
      "id": "chicken-biryani",
      "name": "Chicken Biryani",
      "tamilName": "சிக்கன் பிரியாணி",
      "priceNumeric": 280,
      "isHalal": true,
      "category": "biryani",
      "servingInfo": "Serves 1–2 (With Raitha & Thalcha)"
    }
  ]
}
```

---

## 3. Real-Time Kitchen Hearth Status

### `GET /api/status`
Returns real-time kitchen status calculated against Indian Standard Time (IST, UTC+05:30).

#### Response `200 OK`
```json
{
  "success": true,
  "isOpen": true,
  "currentPhase": "Evening Dum",
  "activeBatch": 5,
  "location": "Karur, Tamil Nadu",
  "halalCertified": true,
  "woodfireSource": "Tamarind & Mango Wood Charcoal",
  "nextBatchEstimate": "Current Batch Active",
  "timestamp": "2026-11-12T21:22:00.000+05:30"
}
```

---

## 4. Order Validation & Processing

### `POST /api/orders`
Validates customer order items, phone number, pincode, and computes applicable discounts and delivery charges.

#### Request Body
```json
{
  "customerName": "Ramesh K",
  "phoneNumber": "9876543210",
  "pincode": "639002",
  "address": "42 Kovai Road, Sengunthapuram, Karur",
  "items": [
    { "dishId": "chicken-biryani", "quantity": 2 }
  ],
  "couponCode": "SAMBAFIRST"
}
```

#### Response `200 OK`
```json
{
  "success": true,
  "orderId": "SB-1731427200000",
  "subtotal": 560,
  "discount": 84,
  "deliveryFee": 0,
  "total": 476,
  "estimatedDeliveryTime": "15–25 Mins"
}
```

---

## 5. Customer Review Ingestion

### `POST /api/reviews`
Submits a sensory rating and dining feedback for verification.

#### Request Body
```json
{
  "patronName": "Anand S",
  "rating": 5,
  "dish": "mutton-biryani",
  "aromaSatisfaction": 5,
  "comment": "Tender meat infused with distinct Seeraga Samba fragrance. Karur's finest dum."
}
```

#### Response `201 Created`
```json
{
  "success": true,
  "message": "Review received and queued for verified publication."
}
```
