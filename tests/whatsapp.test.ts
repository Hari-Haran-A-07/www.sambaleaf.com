import { generateWhatsAppOrderUrl } from "../lib/whatsapp";

describe("WhatsApp URL Builder", () => {
  test("constructs valid URL", () => {
    const url = generateWhatsAppOrderUrl("919876543210", {
      dish: "Chicken Biryani",
      qty: 2,
      accompaniments: "Raitha + Thalcha"
    });
    expect(url).toContain("wa.me/919876543210");
  });
});
