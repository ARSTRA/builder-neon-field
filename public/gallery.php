<?php
/**
 * Standalone PHP Image Gallery with Categories
 * Can be integrated into WordPress or used as standalone page
 */

// Configuration
$gallery_title = "Operations Gallery";
$gallery_subtitle = "World-Class Logistics in Action";

// Image data structure
$gallery_images = [
    [
        'id' => 1,
        'src' => 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop&auto=format&q=80',
        'title' => 'Boeing 747 Cargo Aircraft',
        'description' => 'Our fleet of modern cargo aircraft ensuring fast global delivery',
        'category' => 'Air Freight',
        'location' => 'Dubai International Airport',
        'thumb' => 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop&auto=format&q=80'
    ],
    [
        'id' => 2,
        'src' => 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format&q=80',
        'title' => 'Container Ship Operations',
        'description' => 'Large-scale ocean freight operations handling thousands of containers',
        'category' => 'Ocean Freight',
        'location' => 'Port of Rotterdam',
        'thumb' => 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format&q=80'
    ],
    [
        'id' => 3,
        'src' => 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop&auto=format&q=80',
        'title' => 'Ground Transport Fleet',
        'description' => 'Modern trucking fleet for reliable door-to-door delivery',
        'category' => 'Ground Transport',
        'location' => 'Distribution Center, USA',
        'thumb' => 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop&auto=format&q=80'
    ],
    [
        'id' => 4,
        'src' => 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop&auto=format&q=80',
        'title' => 'Express Package Sorting',
        'description' => 'High-tech sorting facility for express delivery services',
        'category' => 'Express Delivery',
        'location' => 'Global Hub, Singapore',
        'thumb' => 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop&auto=format&q=80'
    ],
    [
        'id' => 5,
        'src' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&auto=format&q=80',
        'title' => 'Modern Warehouse Operations',
        'description' => 'State-of-the-art warehousing and storage facilities',
        'category' => 'Warehousing',
        'location' => 'London Distribution Center',
        'thumb' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&auto=format&q=80'
    ],
    [
        'id' => 6,
        'src' => 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&auto=format&q=80',
        'title' => 'Cargo Loading Operations',
        'description' => 'Professional cargo handling and loading procedures',
        'category' => 'Air Freight',
        'location' => 'Frankfurt Cargo Hub',
        'thumb' => 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&auto=format&q=80'
    ],
    [
        'id' => 7,
        'src' => 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&auto=format&q=80',
        'title' => 'International Port Operations',
        'description' => '24/7 port operations handling global trade',
        'category' => 'Ocean Freight',
        'location' => 'Port of Shanghai',
        'thumb' => 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&auto=format&q=80'
    ],
    [
        'id' => 8,
        'src' => 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format&q=80',
        'title' => 'Cross-Border Trucking',
        'description' => 'Seamless cross-border transportation services',
        'category' => 'Ground Transport',
        'location' => 'US-Canada Border',
        'thumb' => 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format&q=80'
    ],
    [
        'id' => 9,
        'src' => 'https://images.unsplash.com/photo-1593526613712-7b4b9a707330?w=800&h=600&fit=crop&auto=format&q=80',
        'title' => 'Last-Mile Delivery',
        'description' => 'Efficient last-mile delivery solutions for urban areas',
        'category' => 'Express Delivery',
        'location' => 'New York City',
        'thumb' => 'https://images.unsplash.com/photo-1593526613712-7b4b9a707330?w=400&h=300&fit=crop&auto=format&q=80'
    ],
    [
        'id' => 10,
        'src' => 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop&auto=format&q=80',
        'title' => 'Cold Storage Facility',
        'description' => 'Temperature-controlled storage for sensitive cargo',
        'category' => 'Warehousing',
        'location' => 'Miami Cold Chain Hub',
        'thumb' => 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=300&fit=crop&auto=format&q=80'
    ],
    [
        'id' => 11,
        'src' => 'https://images.unsplash.com/photo-1541976590-713941681591?w=800&h=600&fit=crop&auto=format&q=80',
        'title' => 'Global Operations Center',
        'description' => '24/7 monitoring and coordination of worldwide operations',
        'category' => 'Operations',
        'location' => 'GlobalTrack HQ',
        'thumb' => 'https://images.unsplash.com/photo-1541976590-713941681591?w=400&h=300&fit=crop&auto=format&q=80'
    ],
    [
        'id' => 12,
        'src' => 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop&auto=format&q=80',
        'title' => 'Customer Service Center',
        'description' => 'Dedicated customer support and tracking services',
        'category' => 'Operations',
        'location' => 'Customer Care Center',
        'thumb' => 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop&auto=format&q=80'
    ]
];

// Get unique categories
$categories = ['All'];
foreach ($gallery_images as $image) {
    if (!in_array($image['category'], $categories)) {
        $categories[] = $image['category'];
    }
}

// Filter images by category
$selected_category = isset($_GET['category']) ? $_GET['category'] : 'All';
$filtered_images = $selected_category === 'All' 
    ? $gallery_images 
    : array_filter($gallery_images, function($img) use ($selected_category) {
        return $img['category'] === $selected_category;
    });

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $gallery_title; ?> - GlobalTrack</title>
    <meta name="description" content="Explore our world-class logistics operations, modern facilities, and professional transportation network across the globe.">
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Custom CSS -->
    <style>
        .fade-in { animation: fadeIn 0.6s ease-in; }
        .slide-up { animation: slideUp 0.8s ease-out; }
        .scale-hover:hover { transform: scale(1.05); }
        .category-badge {
            background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        .category-badge.air-freight { background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); }
        .category-badge.ocean-freight { background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); }
        .category-badge.ground-transport { background: linear-gradient(135deg, #10b981 0%, #059669 100%); }
        .category-badge.express-delivery { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); }
        .category-badge.warehousing { background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); }
        .category-badge.operations { background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .modal { z-index: 9999; }
        .modal-backdrop { background: rgba(0, 0, 0, 0.8); }
        
        .grid-gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
        }
        
        @media (min-width: 768px) {
            .grid-gallery {
                grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            }
        }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
        <!-- Background Image -->
        <div class="absolute inset-0">
            <img 
                src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Global logistics operations" 
                class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/75 to-blue-700/80"></div>
            <div class="absolute inset-0 bg-black/20"></div>
        </div>
        
        <!-- Content -->
        <div class="relative z-10 container mx-auto px-4 text-center">
            <div class="max-w-5xl mx-auto fade-in">
                <h1 class="text-5xl lg:text-7xl font-bold mb-8">
                    <span class="text-white">Operations</span>
                    <span class="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 mt-2">
                        Gallery
                    </span>
                </h1>
                
                <p class="text-2xl lg:text-3xl text-gray-200 mb-6 font-light">
                    <?php echo $gallery_subtitle; ?>
                </p>
                
                <p class="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
                    Explore our state-of-the-art facilities, cutting-edge transportation network, 
                    and professional operations across the globe. See how GlobalTrack delivers 
                    excellence through innovation, technology, and expertise.
                </p>
                
                <!-- Stats -->
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
                    <div class="text-center">
                        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                            <div class="text-4xl font-bold text-orange-400 mb-2">50+</div>
                            <div class="text-sm text-gray-300">Global Facilities</div>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                            <div class="text-4xl font-bold text-orange-400 mb-2">24/7</div>
                            <div class="text-sm text-gray-300">Operations</div>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                            <div class="text-4xl font-bold text-orange-400 mb-2">120+</div>
                            <div class="text-sm text-gray-300">Countries</div>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                            <div class="text-4xl font-bold text-orange-400 mb-2">1M+</div>
                            <div class="text-sm text-gray-300">Shipments</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Category Filter -->
    <section class="py-12 bg-white border-b sticky top-0 z-40">
        <div class="container mx-auto px-4">
            <div class="flex flex-wrap justify-center gap-4">
                <?php foreach ($categories as $category): ?>
                    <a href="?category=<?php echo urlencode($category); ?>" 
                       class="px-6 py-3 rounded-full font-medium transition-all duration-300 <?php echo $selected_category === $category 
                           ? 'bg-blue-600 text-white shadow-lg' 
                           : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'; ?>">
                        <?php echo htmlspecialchars($category); ?>
                    </a>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Image Gallery -->
    <section class="py-16">
        <div class="container mx-auto px-4">
            <div class="grid-gallery">
                <?php foreach ($filtered_images as $image): ?>
                    <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 scale-hover cursor-pointer fade-in"
                         onclick="openModal(<?php echo $image['id']; ?>)">
                        <div class="relative">
                            <img 
                                src="<?php echo htmlspecialchars($image['thumb']); ?>" 
                                alt="<?php echo htmlspecialchars($image['title']); ?>"
                                class="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                                loading="lazy"
                            />
                            <div class="absolute top-3 left-3">
                                <span class="category-badge <?php echo strtolower(str_replace(' ', '-', $image['category'])); ?>">
                                    <?php echo htmlspecialchars($image['category']); ?>
                                </span>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-lg font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                                <?php echo htmlspecialchars($image['title']); ?>
                            </h3>
                            <p class="text-gray-600 text-sm mb-3 line-clamp-2">
                                <?php echo htmlspecialchars($image['description']); ?>
                            </p>
                            <div class="flex items-center text-xs text-gray-500">
                                <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path>
                                </svg>
                                <?php echo htmlspecialchars($image['location']); ?>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>

            <?php if (empty($filtered_images)): ?>
                <div class="text-center py-20">
                    <p class="text-gray-500 text-lg">No images found for this category.</p>
                </div>
            <?php endif; ?>
        </div>
    </section>

    <!-- Modal for enlarged image -->
    <div id="imageModal" class="fixed inset-0 modal modal-backdrop hidden items-center justify-center p-4">
        <div class="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden">
            <button onclick="closeModal()" class="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>

            <div class="grid md:grid-cols-2">
                <div class="relative">
                    <img id="modalImage" src="" alt="" class="w-full h-96 md:h-full object-cover" />
                </div>
                <div class="p-8">
                    <span id="modalCategory" class="category-badge mb-4 inline-block"></span>
                    <h2 id="modalTitle" class="text-2xl font-bold text-gray-800 mb-4"></h2>
                    <p id="modalDescription" class="text-gray-600 mb-6 leading-relaxed"></p>
                    <div class="flex items-center text-gray-500">
                        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path>
                        </svg>
                        <span id="modalLocation" class="font-medium"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- JavaScript -->
    <script>
        // Image data for modal
        const images = <?php echo json_encode($gallery_images); ?>;
        
        function openModal(imageId) {
            const image = images.find(img => img.id === imageId);
            if (!image) return;
            
            document.getElementById('modalImage').src = image.src;
            document.getElementById('modalImage').alt = image.title;
            document.getElementById('modalCategory').textContent = image.category;
            document.getElementById('modalCategory').className = 'category-badge ' + image.category.toLowerCase().replace(' ', '-') + ' mb-4 inline-block';
            document.getElementById('modalTitle').textContent = image.title;
            document.getElementById('modalDescription').textContent = image.description;
            document.getElementById('modalLocation').textContent = image.location;
            
            document.getElementById('imageModal').classList.remove('hidden');
            document.getElementById('imageModal').classList.add('flex');
            document.body.style.overflow = 'hidden';
        }
        
        function closeModal() {
            document.getElementById('imageModal').classList.add('hidden');
            document.getElementById('imageModal').classList.remove('flex');
            document.body.style.overflow = 'auto';
        }
        
        // Close modal on backdrop click
        document.getElementById('imageModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
        
        // Close modal on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
        
        // Lazy loading and animations
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.fade-in');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
        });
    </script>
</body>
</html>
