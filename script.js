/* ============================================
   LUMIÈRE BEAUTY — MAIN JAVASCRIPT
   Cosmetics eCommerce | Cart & Filter Logic
   ============================================ */

// ============================================
// COSMETICS PRODUCT DATABASE
// ============================================

window.products = [
    // SKINCARE
    {
        id: 1,
        name: 'Rose Glow Vitamin C Serum',
        category: 'skincare',
        categoryLabel: 'Skincare',
        price: 68.00,
        originalPrice: 85.00,
        badge: 'BESTSELLER',
        rating: 4.9,
        reviews: 842,
        size: '30ml',
        description: 'A transformative serum that combines the brightening power of stable Vitamin C with the soothing properties of Bulgarian Rose. This lightweight formula penetrates deeply to even skin tone and boost radiance.',
        benefits: ['Brightens dark spots', 'Boosts collagen production', 'Deeply hydrates with Rose Hip Oil'],
        usage: 'Apply 3-4 drops to clean, dry skin every morning. Follow with moisturizer.',
        image: 'images/rose_glow_serum.jpg',
        icon: 'fas fa-flask',
        color1: '#f093fb', color2: '#f5576c'
    },
    {
        id: 2,
        name: 'Hydra-Plump Moisturizer',
        category: 'skincare',
        categoryLabel: 'Skincare',
        price: 52.00,
        badge: 'FEATURED',
        rating: 4.8,
        reviews: 621,
        size: '50ml',
        description: 'A cloud-like cream that delivers 48 hours of intense hydration. Formulated with three molecular weights of Hyaluronic Acid and skin-barrier-strengthening Ceramides for a plump, dewy finish.',
        benefits: ['Intense 48h hydration', 'Strengthens skin barrier', 'Smooths fine lines'],
        usage: 'Massage a pea-sized amount onto face and neck, morning and night.',
        image: 'images/hydra_plump_moisturizer.jpg',
        icon: 'fas fa-tint',
        color1: '#4facfe', color2: '#00f2fe'
    },
    {
        id: 3,
        name: 'Gold Peptide Eye Cream',
        category: 'skincare',
        categoryLabel: 'Skincare',
        price: 89.00,
        badge: 'PREMIUM',
        rating: 4.7,
        reviews: 389,
        size: '15ml',
        description: 'A luxurious eye treatment infused with 24K gold flakes and potent peptides. Specifically designed to target puffiness, dark circles, and the appearance of "crow\'s feet" for a lifted look.',
        benefits: ['Reduces dark circles', 'Firms under-eye area', 'Illuminates with 24K Gold'],
        usage: 'Gently pat a small amount around the orbital bone using your ring finger.',
        image: 'images/gold_peptide_eye_cream.jpg',
        icon: 'fas fa-star',
        color1: '#f7971e', color2: '#ffd200'
    },
    {
        id: 4,
        name: 'Retinol Night Repair Cream',
        category: 'skincare',
        categoryLabel: 'Skincare',
        price: 74.00,
        badge: 'FEATURED',
        rating: 4.9,
        reviews: 512,
        size: '50ml',
        description: 'Harness the power of time-released retinol to resurface your skin while you sleep. This potent night cream accelerates cell turnover and stimulates collagen without the typical irritation of retinol.',
        benefits: ['Diminishes wrinkles', 'Refines skin texture', 'Evens skin tone'],
        usage: 'Use at night only. Start with 2-3 times a week and gradually increase frequency.',
        image: 'images/retinol_night_repair.jpg',
        icon: 'fas fa-moon',
        color1: '#30cfd0', color2: '#330867'
    },
    {
        id: 5,
        name: 'SPF 50 Daily Sunscreen',
        category: 'skincare',
        categoryLabel: 'Skincare',
        price: 38.00,
        badge: 'BESTSELLER',
        rating: 4.8,
        reviews: 934,
        size: '60ml',
        description: 'The ultimate daily defense. An ultra-lightweight, invisible SPF 50 that protects against UVA/UVB rays and blue light. Infused with Niacinamide to soothe skin and control excess oil.',
        benefits: ['Invisible finish (no white cast)', 'Blue light protection', 'Oil-controlling formula'],
        usage: 'Apply generously as the last step of your skincare routine, 15 minutes before sun exposure.',
        image: 'images/spf_50_sunscreen.jpg',
        icon: 'fas fa-sun',
        color1: '#fa709a', color2: '#fee140'
    },
    {
        id: 6,
        name: 'AHA/BHA Exfoliating Toner',
        category: 'skincare',
        categoryLabel: 'Skincare',
        price: 45.00,
        badge: 'NEW',
        rating: 4.6,
        reviews: 276,
        size: '150ml',
        description: 'A precision-formulated liquid exfoliant. 5% AHA removes dead surface cells for instant glow, while 2% BHA clears pores to prevent breakouts and smooth texture.',
        benefits: ['Clears congested pores', 'Instant radiance', 'Smooths rough texture'],
        usage: 'Saturate a cotton pad and sweep over clean face. Use 2-3 times a week initially.',
        image: 'images/aha_bha_toner.jpg',
        icon: 'fas fa-flask',
        color1: '#a8edea', color2: '#fed6e3'
    },
    {
        id: 7,
        name: 'Niacinamide Pore Minimizer',
        category: 'skincare',
        categoryLabel: 'Skincare',
        price: 29.00,
        badge: 'SALE',
        originalPrice: 42.00,
        rating: 4.7,
        reviews: 1204,
        size: '30ml',
        description: 'A clinical-strength formula that targets enlarged pores and oily shine. 10% Niacinamide (Vitamin B3) works with Zinc PCA to balance sebum production and improve skin clarity.',
        benefits: ['Reduces pore size', 'Controls oil', 'Calms redness'],
        usage: 'Apply a few drops to the face in the morning and evening before heavier creams.',
        image: 'images/niacinamide_serum.jpg',
        icon: 'fas fa-leaf',
        color1: '#667eea', color2: '#764ba2'
    },
    {
        id: 8,
        name: 'Squalane Face Oil',
        category: 'skincare',
        categoryLabel: 'Skincare',
        price: 35.00,
        badge: 'FEATURED',
        rating: 4.8,
        reviews: 443,
        size: '30ml',
        description: 'A 100% plant-derived, non-comedogenic oil that mimics skin\'s natural lipids. This "dry" oil absorbs instantly to lock in moisture and leave skin silky soft without a greasy residue.',
        benefits: ['Locks in hydration', 'Non-greasy finish', 'Safe for acne-prone skin'],
        usage: 'Press a few drops onto the face and neck as the final step of your routine.',
        image: 'images/squalane_face_oil.jpg',
        icon: 'fas fa-seedling',
        color1: '#f093fb', color2: '#f5576c'
    },

    // MAKEUP
    {
        id: 9,
        name: 'Velvet Matte Lip Color',
        category: 'makeup',
        categoryLabel: 'Makeup',
        price: 32.00,
        badge: 'BESTSELLER',
        rating: 4.9,
        reviews: 1876,
        size: '3.5g',
        description: 'High-pigment color meets weightless comfort. Our signature matte formula glides on like a cream and sets to a velvet finish that lasts for 12 hours without drying your lips.',
        benefits: ['12-hour wear', 'Hydrating matte finish', 'Full-coverage pigment'],
        usage: 'Apply directly to lips. For more precision, use a lip brush.',
        image: 'images/velvet_matte_lipstick.jpg',
        icon: 'fas fa-kiss-wink-heart',
        color1: '#ff6b6b', color2: '#ee5a24'
    },
    {
        id: 10,
        name: 'Luminous Foundation',
        category: 'makeup',
        categoryLabel: 'Makeup',
        price: 55.00,
        badge: 'FEATURED',
        rating: 4.8,
        reviews: 723,
        size: '30ml',
        description: 'Your skin, but better. This buildable foundation offers a medium, breathable coverage with a natural radiant finish. Infused with skin-loving Vitamin E and antioxidants.',
        benefits: ['Natural glow finish', 'Buildable coverage', 'Breathable wear'],
        usage: 'Apply with a sponge for a dewy look, or a brush for more coverage.',
        image: 'images/luminous_foundation.jpg',
        icon: 'fas fa-paint-brush',
        color1: '#fa709a', color2: '#fee140'
    },
    {
        id: 11,
        name: 'Precision Brow Pencil',
        category: 'makeup',
        categoryLabel: 'Makeup',
        price: 24.00,
        badge: 'NEW',
        rating: 4.7,
        reviews: 342,
        size: '0.9g',
        description: 'An ultra-fine tip pencil that creates believable, hair-like strokes. The long-wearing, smudge-proof formula ensures your brows stay perfectly defined all day long.',
        benefits: ['Ultra-fine 1.5mm tip', 'Built-in spoolie brush', 'Smudge-proof formula'],
        usage: 'Use short, upward strokes to fill in sparse areas and define the arch.',
        image: 'images/precision_brow_pencil.jpg',
        icon: 'fas fa-pencil-alt',
        color1: '#8B5CF6', color2: '#A78BFA'
    },
    {
        id: 12,
        name: 'Cream Blush Palette',
        category: 'makeup',
        categoryLabel: 'Makeup',
        price: 48.00,
        badge: 'FEATURED',
        rating: 4.6,
        reviews: 458,
        size: '12g',
        description: 'A quartet of melt-into-skin cream blushes. These versatile shades can be used on cheeks and lips for a coordinated, fresh-faced glow that looks completely natural.',
        benefits: ['Seamless blending', 'Multi-use formula', 'Hydrating finish'],
        usage: 'Dab onto the apples of your cheeks using your fingers or a dense brush.',
        image: 'images/cream_blush_palette.jpg',
        icon: 'fas fa-circle',
        color1: '#f093fb', color2: '#f5576c'
    },
    {
        id: 13,
        name: 'Lengthening Mascara',
        category: 'makeup',
        categoryLabel: 'Makeup',
        price: 27.00,
        badge: 'BESTSELLER',
        rating: 4.9,
        reviews: 2341,
        size: '8ml',
        description: 'A high-impact mascara that stretches every lash for extreme length and lift. The curved brush separates lashes without clumping, while the tubing formula prevents smudging.',
        benefits: ['Extreme length & lift', 'No-smudge tubing formula', 'Easy removal with warm water'],
        usage: 'Wiggle the brush from the root to the tip of lashes. Layer for extra volume.',
        image: 'images/lengthening_mascara.jpg',
        icon: 'fas fa-eye',
        color1: '#2d3436', color2: '#636e72'
    },
    {
        id: 14,
        name: 'Glow Highlight Palette',
        category: 'makeup',
        categoryLabel: 'Makeup',
        price: 52.00,
        badge: 'PREMIUM',
        rating: 4.8,
        reviews: 567,
        size: '18g',
        description: 'Capture the light with our multidimensional highlight palette. Three buttery-soft powders that deliver a spectrum of radiance, from a subtle sheen to a high-voltage strobe.',
        benefits: ['Wet-look shine', 'Zero glitter fallout', 'Universal shades'],
        usage: 'Sweep onto high points of the face: cheekbones, brow bone, and bridge of the nose.',
        image: 'images/glow_highlight_palette.jpg',
        icon: 'fas fa-star',
        color1: '#f7971e', color2: '#ffd200'
    },
    {
        id: 15,
        name: 'Liquid Eye Liner',
        category: 'makeup',
        categoryLabel: 'Makeup',
        price: 21.00,
        badge: 'SALE',
        originalPrice: 30.00,
        rating: 4.7,
        reviews: 891,
        size: '2ml',
        description: 'Define your eyes with razor-sharp precision. This waterproof, carbon-black liner features a flexible felt-tip for easy application of both thin and thick lines.',
        benefits: ['24-hour waterproof wear', 'Ultra-black pigment', 'Easy-glide tip'],
        usage: 'Shake well. Glide along the lash line, starting from the inner corner outwards.',
        image: 'images/liquid_eye_liner.jpg',
        icon: 'fas fa-pen-nib',
        color1: '#2d3436', color2: '#636e72'
    },
    {
        id: 16,
        name: 'Setting Powder',
        category: 'makeup',
        categoryLabel: 'Makeup',
        price: 39.00,
        badge: 'NEW',
        rating: 4.6,
        reviews: 312,
        size: '10g',
        description: 'A weightless, translucent powder that blurs the appearance of pores and fine lines. Sets makeup for all-day wear without looking cakey or flat.',
        benefits: ['Blurring effect', 'Flashback-free formula', 'Weightless feel'],
        usage: 'Dust lightly over the T-zone or anywhere you want to reduce shine.',
        image: 'images/setting_powder.jpg',
        icon: 'fas fa-circle',
        color1: '#dfe6e9', color2: '#b2bec3'
    },

    // FRAGRANCE
    {
        id: 17,
        name: 'Midnight Bloom EDP',
        category: 'fragrance',
        categoryLabel: 'Fragrance',
        price: 128.00,
        badge: 'FEATURED',
        rating: 4.9,
        reviews: 634,
        size: '50ml',
        description: 'A deeply sensual and mysterious fragrance. Notes of rare Black Rose and smoky Oud are softened by creamy Amber, creating a scent that is both powerful and intimate.',
        benefits: ['Long-lasting (8-10h)', 'Intense projection', 'Unique signature scent'],
        usage: 'Spray onto pulse points: wrists, neck, and behind the ears.',
        image: 'images/midnight_bloom_edp.jpg',
        icon: 'fas fa-spray-can',
        color1: '#2d3436', color2: '#6c5ce7'
    },
    {
        id: 18,
        name: 'Solar Bloom Eau de Parfum',
        category: 'fragrance',
        categoryLabel: 'Fragrance',
        price: 96.00,
        badge: 'BESTSELLER',
        rating: 4.8,
        reviews: 478,
        size: '50ml',
        description: 'A radiant, sunny fragrance that evokes a summer garden in full bloom. Sparkling Citrus and airy Jasmine meet a warm base of Sandalwood and solar Accord.',
        benefits: ['Fresh and uplifting', 'Daily wear favorite', 'High-quality botanicals'],
        usage: 'Spray onto pulse points. Avoid rubbing wrists together after application.',
        image: 'images/solar_bloom_edp.jpg',
        icon: 'fas fa-spray-can',
        color1: '#f7971e', color2: '#ffd200'
    },
    {
        id: 19,
        name: 'Rose Velvet Body Mist',
        category: 'fragrance',
        categoryLabel: 'Fragrance',
        price: 42.00,
        badge: 'NEW',
        rating: 4.7,
        reviews: 198,
        size: '200ml',
        description: 'A light and refreshing mist for all-over fragrance. Infused with real Rose Hydrosol, it leaves a delicate trail of velvet rose petals and clean White Musk.',
        benefits: ['Refreshing hydration', 'Subtle scent trail', 'Alcohol-free options'],
        usage: 'Mist generously over the body for a refreshing scent anytime.',
        image: 'images/rose_velvet_mist.jpg',
        icon: 'fas fa-wind',
        color1: '#fd79a8', color2: '#e84393'
    },
    {
        id: 20,
        name: 'Oud Royal Perfume',
        category: 'fragrance',
        categoryLabel: 'Fragrance',
        price: 195.00,
        badge: 'PREMIUM',
        rating: 4.9,
        reviews: 287,
        size: '100ml',
        description: 'The pinnacle of luxury fragrance. An opulent blend of genuine Cambodian Oud, saffron, and rare woods. A scent designed for those who demand the absolute best.',
        benefits: ['24-hour longevity', 'Rich, complex layers', 'Hand-finished bottle'],
        usage: 'Apply a single spray to the neck or chest for a bold presence.',
        image: 'images/oud_royal_parfum.jpg',
        icon: 'fas fa-gem',
        color1: '#6c3483', color2: '#9b59b6'
    },
    {
        id: 21,
        name: 'Citrus Zest EDT',
        category: 'fragrance',
        categoryLabel: 'Fragrance',
        price: 68.00,
        badge: 'SALE',
        originalPrice: 88.00,
        rating: 4.6,
        reviews: 342,
        size: '75ml',
        description: 'An energizing burst of Mediterranean citrus. Bergamot, Sicilian Lemon, and Green Tea create a zesty, clean fragrance that is perfect for hot summer days.',
        benefits: ['Refreshing citrus notes', 'Unisex appeal', 'Great for layering'],
        usage: 'Apply liberally to skin and clothing for a fresh morning start.',
        image: 'images/citrus_zest_edt.jpg',
        icon: 'fas fa-lemon',
        color1: '#f7971e', color2: '#00b09b'
    },
    {
        id: 22,
        name: 'Floral Fantasy Perfume',
        category: 'fragrance',
        categoryLabel: 'Fragrance',
        price: 112.00,
        badge: 'FEATURED',
        rating: 4.8,
        reviews: 221,
        size: '50ml',
        description: 'A whimsical and romantic floral bouquet. Delicate Peony and sweet Freesia are grounded by a base of warm Madagascar Vanilla and white woods.',
        benefits: ['Romantic floral notes', 'Elegant presentation', 'Soft dry-down'],
        usage: 'Spray onto pulse points and allow to dry naturally.',
        image: 'images/solar_bloom_edp.jpg',
        icon: 'fas fa-seedling',
        color1: '#fd79a8', color2: '#6c5ce7'
    },

    // HAIR CARE
    {
        id: 23,
        name: 'Argan Repair Hair Mask',
        category: 'haircare',
        categoryLabel: 'Hair Care',
        price: 44.00,
        badge: 'BESTSELLER',
        rating: 4.9,
        reviews: 1423,
        size: '200ml',
        description: 'A deep-conditioning treatment that breathes life back into dry, damaged hair. Pure Argan Oil and Shea Butter penetrate the hair shaft to restore elasticity and shine.',
        benefits: ['Repairs split ends', 'Deeply moisturizes', 'Restores natural shine'],
        usage: 'Apply to damp hair from mid-lengths to ends. Leave for 10-15 minutes, then rinse.',
        image: 'images/argan_repair_mask.jpg',
        icon: 'fas fa-cut',
        color1: '#f7971e', color2: '#ffd200'
    },
    {
        id: 24,
        name: 'Keratin Bond Shampoo',
        category: 'haircare',
        categoryLabel: 'Hair Care',
        price: 36.00,
        badge: 'FEATURED',
        rating: 4.7,
        reviews: 678,
        size: '250ml',
        description: 'A gentle, sulfate-free shampoo that strengthens hair from within. Infused with Hydrolyzed Keratin to bond and smooth the hair cuticle for a frizz-free finish.',
        benefits: ['Sulfate-free cleansing', 'Strengthens hair bonds', 'Anti-frizz formula'],
        usage: 'Massage into wet scalp and hair. Rinse thoroughly.',
        image: 'images/keratin_bond_shampoo.jpg',
        icon: 'fas fa-shower',
        color1: '#4facfe', color2: '#00f2fe'
    },
    {
        id: 25,
        name: 'Scalp Revive Serum',
        category: 'haircare',
        categoryLabel: 'Hair Care',
        price: 62.00,
        badge: 'NEW',
        rating: 4.6,
        reviews: 234,
        size: '50ml',
        description: 'A targeted serum for a healthier scalp. Biotin and Caffeine stimulate follicles to promote hair density, while Salicylic Acid gently exfoliates to remove build-up.',
        benefits: ['Promotes hair growth', 'Balances scalp oil', 'Exfoliates scalp'],
        usage: 'Apply directly to the scalp and massage in. Use daily on wet or dry hair.',
        image: 'images/scalp_revive_serum.jpg',
        icon: 'fas fa-flask',
        color1: '#30cfd0', color2: '#330867'
    },
    {
        id: 26,
        name: 'Glossing Hair Oil',
        category: 'haircare',
        categoryLabel: 'Hair Care',
        price: 48.00,
        badge: 'FEATURED',
        rating: 4.8,
        reviews: 891,
        size: '100ml',
        description: 'The ultimate finishing touch. A lightweight blend of Marula and Camellia oils that delivers instant glass-like shine and protects against environmental stressors.',
        benefits: ['Glass-like shine', 'Heat protection', 'Weightless formula'],
        usage: 'Apply a small amount to the palms and smooth over dry hair ends.',
        image: 'images/glossing_hair_oil.jpg',
        icon: 'fas fa-tint',
        color1: '#667eea', color2: '#764ba2'
    },
    {
        id: 27,
        name: 'Color Protect Conditioner',
        category: 'haircare',
        categoryLabel: 'Hair Care',
        price: 34.00,
        badge: 'BESTSELLER',
        rating: 4.7,
        reviews: 543,
        size: '250ml',
        description: 'Seal in your color and boost vibrance. This conditioner uses UV filters and Silk Proteins to prevent fading and keep color-treated hair looking salon-fresh.',
        benefits: ['Prevents color fade', 'UV protection', 'Smooths and detangles'],
        usage: 'Apply to clean, wet hair. Leave for 2 minutes, then rinse.',
        image: 'images/color_protect_conditioner.jpg',
        icon: 'fas fa-palette',
        color1: '#fa709a', color2: '#fee140'
    },
    {
        id: 28,
        name: 'Heat Protection Spray',
        category: 'haircare',
        categoryLabel: 'Hair Care',
        price: 28.00,
        badge: 'SALE',
        originalPrice: 40.00,
        rating: 4.6,
        reviews: 712,
        size: '150ml',
        description: 'A must-have for heat styling. Protects hair up to 230°C (450°F) while adding a light hold and subtle shine for a professional finish.',
        benefits: ['Heat protection up to 230°C', 'Speeds up blow-dry time', 'Adds subtle hold'],
        usage: 'Mist evenly over damp or dry hair before using heat styling tools.',
        image: 'images/heat_protection_spray.jpg',
        icon: 'fas fa-fire',
        color1: '#f7971e', color2: '#ee5a24'
    }
];

// ============================================
// CART MANAGEMENT
// ============================================

function getCart() {
    const cart = localStorage.getItem('lumiereCart');
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem('lumiereCart', JSON.stringify(cart));
}

function addToCart(productId, quantity = 1) {
    const product = window.products.find(p => p.id === productId);
    if (!product) return;

    const cart = getCart();
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            category: product.category,
            categoryLabel: product.categoryLabel,
            quantity: quantity,
            color1: product.color1,
            color2: product.color2,
            image: product.image,
            size: product.size
        });
    }

    saveCart(cart);
    updateCartCount();
    showNotification(`✓ ${product.name} added to your bag!`);
}

function updateCartCount() {
    const cart = getCart();
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('#cartCount').forEach(el => {
        el.textContent = total;
        el.style.display = total > 0 ? 'inline-block' : 'none';
    });
    renderCartDrawer();
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    updateCartCount();
}

function updateCartQty(productId, delta) {
    const cart = getCart();
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity < 1) {
            removeFromCart(productId);
            return;
        }
        saveCart(cart);
        updateCartCount();
    }
}

function renderCartDrawer() {
    const drawerBody = document.getElementById('cartDrawerBody');
    const drawerFooter = document.getElementById('cartDrawerFooter');
    if (!drawerBody || !drawerFooter) return;

    const cart = getCart();
    if (cart.length === 0) {
        drawerBody.innerHTML = `
            <div class="text-center py-5 my-auto">
                <i class="fas fa-shopping-bag fa-3x mb-3 text-muted" style="opacity:0.3"></i>
                <p class="text-muted">Your bag is empty</p>
                <a href="shop.html" class="btn btn-sm btn-hero-primary mt-2" data-bs-dismiss="offcanvas">Shop Collection</a>
            </div>
        `;
        drawerFooter.style.display = 'none';
        return;
    }

    drawerFooter.style.display = 'block';
    
    drawerBody.innerHTML = `
        <div class="cart-drawer-items">
            ${cart.map(item => `
                <div class="cart-drawer-item d-flex gap-3 mb-4">
                    <img src="${item.image}" class="cart-item-img-sm" alt="${item.name}">
                    <div class="flex-grow-1">
                        <div class="d-flex justify-content-between align-items-start">
                            <h6 class="mb-0 fw-bold" style="font-size:0.85rem">${item.name}</h6>
                            <button class="btn-close-sm" onclick="removeFromCart(${item.id})"><i class="fas fa-times"></i></button>
                        </div>
                        <p class="text-muted mb-2" style="font-size:0.75rem">${item.size || '30ml'}</p>
                        <div class="d-flex justify-content-between align-items-center mt-2">
                            <div class="qty-control-sm">
                                <button onclick="updateCartQty(${item.id}, -1)">-</button>
                                <span>${item.quantity}</span>
                                <button onclick="updateCartQty(${item.id}, 1)">+</button>
                            </div>
                            <span class="fw-bold" style="font-size:0.85rem">${formatCurrency(item.price * item.quantity)}</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    drawerFooter.innerHTML = `
        <div class="d-flex justify-content-between mb-3">
            <span class="text-muted">Subtotal</span>
            <span class="fw-bold">${formatCurrency(subtotal)}</span>
        </div>
        <a href="checkout.html" class="btn btn-hero-primary w-100 py-3">Checkout</a>
        <p class="text-center mt-2 mb-0" style="font-size:0.7rem; color:var(--text-secondary)">Taxes and shipping calculated at checkout</p>
    `;
}

function showNotification(message) {
    const existing = document.querySelector('.notification-toast');
    if (existing) existing.remove();

    const el = document.createElement('div');
    el.className = 'notification-toast';
    el.innerHTML = message;
    document.body.appendChild(el);
    
    // Animate in
    setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, 10);

    setTimeout(() => { 
        el.style.opacity = '0'; 
        el.style.transform = 'translateY(20px)'; 
        el.style.transition = 'all 0.4s ease'; 
    }, 2500);
    setTimeout(() => el.remove(), 3000);
}

// ============================================
// QUICK VIEW MODAL
// ============================================

function openQuickView(productId) {
    const product = window.products.find(p => p.id === productId);
    if (!product) return;

    const content = document.getElementById('productDetailsContent');
    if (!content) return;

    content.innerHTML = `
        <div class="row g-5">
            <div class="col-lg-6">
                <img src="${product.image}" class="product-modal-img" alt="${product.name}">
            </div>
            <div class="col-lg-6">
                <span class="modal-product-cat">${product.categoryLabel}</span>
                <h2 class="modal-product-name">${product.name}</h2>
                <div class="product-rating mb-3">
                    <span class="stars-sm">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</span>
                    <span class="text-muted ms-2">(${product.reviews} reviews)</span>
                </div>
                <h3 class="modal-product-price">${formatCurrency(product.price)}</h3>
                <p class="modal-product-desc">${product.description}</p>
                
                <h6 class="modal-section-title">Key Benefits</h6>
                <ul class="modal-benefits-list">
                    ${(product.benefits || ['Premium ingredients', 'Cruelty-free', 'Visible results']).map(b => `<li>${b}</li>`).join('')}
                </ul>

                <h6 class="modal-section-title">How to Use</h6>
                <div class="modal-usage-info">
                    ${product.usage || 'Apply as needed to clean skin.'}
                </div>

                <div class="modal-actions">
                    <div class="qty-input-wrap">
                        <button onclick="updateModalQty(-1)"><i class="fas fa-minus"></i></button>
                        <input type="number" id="modalQty" value="1" min="1" readonly>
                        <button onclick="updateModalQty(1)"><i class="fas fa-plus"></i></button>
                    </div>
                    <button class="btn btn-hero-primary flex-grow-1" onclick="addToCart(${product.id}, parseInt(document.getElementById('modalQty').value)); bootstrap.Modal.getInstance(document.getElementById('productModal')).hide();">
                        Add to Bag
                    </button>
                </div>
            </div>
        </div>
    `;

    const modalEl = document.getElementById('productModal');
    if (modalEl) {
        const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
        modal.show();
    }
}

function updateModalQty(delta) {
    const input = document.getElementById('modalQty');
    if (!input) return;
    let val = parseInt(input.value) + delta;
    if (val < 1) val = 1;
    input.value = val;
}

// ============================================
// WISHLIST MANAGEMENT
// ============================================

function getWishlist() {
    const wishlist = localStorage.getItem('lumiereWishlist');
    return wishlist ? JSON.parse(wishlist) : [];
}

function saveWishlist(wishlist) {
    localStorage.setItem('lumiereWishlist', JSON.stringify(wishlist));
}

function toggleWishlist(productId, btnEl) {
    let wishlist = getWishlist();
    const index = wishlist.indexOf(productId);
    const product = window.products.find(p => p.id === productId);

    if (index === -1) {
        wishlist.push(productId);
        showNotification(`♥ ${product ? product.name : 'Product'} added to favorites!`);
        if (btnEl) btnEl.classList.add('active');
    } else {
        wishlist.splice(index, 1);
        showNotification(`Removed from favorites.`);
        if (btnEl) btnEl.classList.remove('active');
    }

    saveWishlist(wishlist);
    updateWishlistUI();
}

function updateWishlistUI() {
    const wishlist = getWishlist();
    
    // Update count badges
    document.querySelectorAll('#wishlistCount').forEach(el => {
        el.textContent = wishlist.length;
        el.style.display = wishlist.length > 0 ? 'inline-block' : 'none';
    });

    // Update heart icons on cards
    document.querySelectorAll('.action-btn[onclick*="toggleWishlist"]').forEach(btn => {
        const onclick = btn.getAttribute('onclick');
        if (onclick) {
            const match = onclick.match(/toggleWishlist\((\d+)/);
            if (match) {
                const id = parseInt(match[1]);
                btn.classList.toggle('active', wishlist.includes(id));
            }
        }
    });

    // Render drawer content
    renderWishlistDrawer();
}

function renderWishlistDrawer() {
    const drawerBody = document.getElementById('wishlistDrawerBody');
    if (!drawerBody) return;

    const wishlist = getWishlist();
    if (wishlist.length === 0) {
        drawerBody.innerHTML = `
            <div class="text-center py-5">
                <i class="far fa-heart fa-3x mb-3 text-muted" style="opacity:0.3"></i>
                <p class="text-muted">Your wishlist is empty</p>
                <a href="shop.html" class="btn btn-sm btn-hero-primary mt-2">Start Shopping</a>
            </div>
        `;
        return;
    }

    const products = wishlist.map(id => window.products.find(p => p.id === id)).filter(p => p);
    
    drawerBody.innerHTML = `
        <div class="wishlist-items">
            ${products.map(product => `
                <div class="wishlist-item d-flex gap-3 mb-4 align-items-center">
                    <img src="${product.image}" class="wishlist-item-img" alt="${product.name}">
                    <div class="flex-grow-1">
                        <h6 class="mb-1 fw-bold" style="font-size:0.9rem">${product.name}</h6>
                        <p class="mb-1 text-muted" style="font-size:0.8rem">${formatCurrency(product.price)}</p>
                        <div class="d-flex gap-3">
                            <button class="btn btn-link p-0 text-accent-light" style="font-size:0.75rem; text-decoration:none; color: var(--accent-light) !important;" onclick="addToCart(${product.id})">Move to Bag</button>
                            <button class="btn btn-link p-0 text-danger" style="font-size:0.75rem; text-decoration:none; color: #ff6b6b !important;" onclick="toggleWishlist(${product.id})">Remove</button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }
    updateCartCount();
    updateWishlistUI();
});

// ============================================
// UTILITIES
// ============================================

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function formatCurrency(value) {
    return '$' + parseFloat(value).toFixed(2);
}

function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

function getUrlParameter(param) {
    return new URLSearchParams(window.location.search).get(param);
}

// Newsletter form
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.newsletter-form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (isValidEmail(email)) {
                showNotification('✓ Welcome to the LUMIÈRE Club!');
                this.reset();
            } else {
                showNotification('Please enter a valid email address.');
            }
        });
    });
});

// Escape key for modals
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.show').forEach(modal => {
            bootstrap.Modal.getInstance(modal)?.hide();
        });
    }
});

// Debug
window.debugCart = {
    getCart, saveCart,
    products: window.products,
    clearCart: () => {
        localStorage.removeItem('lumiereCart');
        updateCartCount();
        showNotification('Cart cleared');
    }
};
