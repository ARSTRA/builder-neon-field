<?php
/**
 * Standalone PHP Image Gallery with Categories
 * Enhanced version with improved layout and responsive design
 * Can be integrated into WordPress or used as standalone page
 */

// Configuration
$gallery_title = "Operations Gallery";
$gallery_subtitle = "World-Class Logistics in Action";
$gallery_description = "Explore our state-of-the-art facilities, cutting-edge transportation network, and professional operations across the globe.";

// Enhanced image data structure with more details
$gallery_images = [
    [
        'id' => 1,
        'src' => 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop&auto=format&q=80',
        'title' => 'Boeing 747 Cargo Aircraft',
        'description' => 'Our fleet of modern cargo aircraft ensuring fast global delivery with state-of-the-art tracking systems and climate-controlled compartments.',
        'category' => 'Air Freight',
        'location' => 'Dubai International Airport',
        'thumb' => 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop&auto=format&q=80',
        'tags' => ['aviation', 'cargo', 'international'],
        'stats' => ['24-48h delivery', '50+ destinations']
    ],
    [
        'id' => 2,
        'src' => 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format&q=80',
        'title' => 'Container Ship Operations',
        'description' => 'Large-scale ocean freight operations handling thousands of containers with advanced logistics management and real-time tracking capabilities.',
        'category' => 'Ocean Freight',
        'location' => 'Port of Rotterdam',
        'thumb' => 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format&q=80',
        'tags' => ['shipping', 'containers', 'bulk cargo'],
        'stats' => ['10,000+ TEU capacity', 'Global network']
    ],
    [
        'id' => 3,
        'src' => 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop&auto=format&q=80',
        'title' => 'Ground Transport Fleet',
        'description' => 'Modern trucking fleet for reliable door-to-door delivery featuring GPS tracking, temperature control, and eco-friendly vehicles.',
        'category' => 'Ground Transport',
        'location' => 'Distribution Center, USA',
        'thumb' => 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop&auto=format&q=80',
        'tags' => ['trucking', 'door-to-door', 'eco-friendly'],
        'stats' => ['500+ vehicles', 'Real-time tracking']
    ],
    [
        'id' => 4,
        'src' => 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop&auto=format&q=80',
        'title' => 'Express Package Sorting',
        'description' => 'High-tech sorting facility for express delivery services with automated systems processing thousands of packages per hour.',
        'category' => 'Express Delivery',
        'location' => 'Global Hub, Singapore',
        'thumb' => 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop&auto=format&q=80',
        'tags' => ['automation', 'sorting', 'express'],
        'stats' => ['15,000 packages/hour', 'AI-powered sorting']
    ],
    [
        'id' => 5,
        'src' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&auto=format&q=80',
        'title' => 'Modern Warehouse Operations',
        'description' => 'State-of-the-art warehousing and storage facilities with automated inventory management and climate-controlled environments.',
        'category' => 'Warehousing',
        'location' => 'London Distribution Center',
        'thumb' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&auto=format&q=80',
        'tags' => ['warehousing', 'automation', 'inventory'],
        'stats' => ['100,000 sq ft', 'Climate controlled']
    ],
    [
        'id' => 6,
        'src' => 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&auto=format&q=80',
        'title' => 'Cargo Loading Operations',
        'description' => 'Professional cargo handling and loading procedures with specialized equipment and trained personnel ensuring cargo safety.',
        'category' => 'Air Freight',
        'location' => 'Frankfurt Cargo Hub',
        'thumb' => 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&auto=format&q=80',
        'tags' => ['cargo handling', 'safety', 'professional'],
        'stats' => ['24/7 operations', 'Specialized equipment']
    ],
    [
        'id' => 7,
        'src' => 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&auto=format&q=80',
        'title' => 'International Port Operations',
        'description' => '24/7 port operations handling global trade with advanced crane systems and efficient container management processes.',
        'category' => 'Ocean Freight',
        'location' => 'Port of Shanghai',
        'thumb' => 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&auto=format&q=80',
        'tags' => ['port operations', 'cranes', 'global trade'],
        'stats' => ['World\'s busiest port', '47M TEU annually']
    ],
    [
        'id' => 8,
        'src' => 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format&q=80',
        'title' => 'Cross-Border Trucking',
        'description' => 'Seamless cross-border transportation services with customs clearance support and multi-modal connectivity.',
        'category' => 'Ground Transport',
        'location' => 'US-Canada Border',
        'thumb' => 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format&q=80',
        'tags' => ['cross-border', 'customs', 'multi-modal'],
        'stats' => ['Customs certified', 'Border pre-clearance']
    ],
    [
        'id' => 9,
        'src' => 'https://images.unsplash.com/photo-1593526613712-7b4b9a707330?w=800&h=600&fit=crop&auto=format&q=80',
        'title' => 'Last-Mile Delivery',
        'description' => 'Efficient last-mile delivery solutions for urban areas featuring electric vehicles and optimized route planning.',
        'category' => 'Express Delivery',
        'location' => 'New York City',
        'thumb' => 'https://images.unsplash.com/photo-1593526613712-7b4b9a707330?w=400&h=300&fit=crop&auto=format&q=80',
        'tags' => ['last-mile', 'electric', 'urban delivery'],
        'stats' => ['Zero emissions', 'Same-day delivery']
    ],
    [
        'id' => 10,
        'src' => 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop&auto=format&q=80',
        'title' => 'Cold Storage Facility',
        'description' => 'Temperature-controlled storage for sensitive cargo with precise climate monitoring and pharmaceutical-grade conditions.',
        'category' => 'Warehousing',
        'location' => 'Miami Cold Chain Hub',
        'thumb' => 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=300&fit=crop&auto=format&q=80',
        'tags' => ['cold storage', 'pharmaceutical', 'temperature control'],
        'stats' => ['-20°C to +25°C', 'GDP certified']
    ],
    [
        'id' => 11,
        'src' => 'https://images.unsplash.com/photo-1541976590-713941681591?w=800&h=600&fit=crop&auto=format&q=80',
        'title' => 'Global Operations Center',
        'description' => '24/7 monitoring and coordination of worldwide operations with advanced analytics and real-time visibility platforms.',
        'category' => 'Operations',
        'location' => 'GlobalTrack HQ',
        'thumb' => 'https://images.unsplash.com/photo-1541976590-713941681591?w=400&h=300&fit=crop&auto=format&q=80',
        'tags' => ['monitoring', 'analytics', 'global coordination'],
        'stats' => ['24/7 monitoring', 'Real-time visibility']
    ],
    [
        'id' => 12,
        'src' => 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop&auto=format&q=80',
        'title' => 'Customer Service Center',
        'description' => 'Dedicated customer support and tracking services with multilingual support and 24/7 availability across all time zones.',
        'category' => 'Operations',
        'location' => 'Customer Care Center',
        'thumb' => 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop&auto=format&q=80',
        'tags' => ['customer service', 'multilingual', 'support'],
        'stats' => ['24/7 support', '15 languages']
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

// Pagination
$items_per_page = 9;
$current_page = isset($_GET['page']) ? max(1, intval($_GET['page'])) : 1;
$total_items = count($filtered_images);
$total_pages = ceil($total_items / $items_per_page);
$offset = ($current_page - 1) * $items_per_page;
$paginated_images = array_slice($filtered_images, $offset, $items_per_page);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($gallery_title); ?> - ShipNexa.it</title>
    <meta name="description" content="<?php echo htmlspecialchars($gallery_description); ?>">
    <meta name="keywords" content="logistics, shipping, air freight, ocean freight, warehousing, transportation">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="<?php echo htmlspecialchars($gallery_title); ?>">
    <meta property="og:description" content="<?php echo htmlspecialchars($gallery_description); ?>">
    <meta property="og:type" content="website">
    <meta property="og:image" content="<?php echo htmlspecialchars($gallery_images[0]['src']); ?>">
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Enhanced Custom CSS -->
    <style>
        :root {
            --primary-blue: #3b82f6;
            --secondary-orange: #f59e0b;
            --accent-cyan: #06b6d4;
            --dark-blue: #1e40af;
            --light-gray: #f8fafc;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            line-height: 1.6;
            background: linear-gradient(135deg, var(--light-gray) 0%, #e2e8f0 100%);
            color: #1e293b;
        }
        
        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Enhanced Header */
        .hero-section {
            background: linear-gradient(135deg, var(--dark-blue) 0%, var(--primary-blue) 50%, var(--accent-cyan) 100%);
            color: white;
            padding: 100px 0;
            position: relative;
            overflow: hidden;
        }
        
        .hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
            opacity: 0.3;
        }
        
        .hero-content {
            position: relative;
            z-index: 2;
            text-align: center;
        }
        
        .hero-title {
            font-size: clamp(3rem, 6vw, 5rem);
            font-weight: 800;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            letter-spacing: -0.02em;
            background: linear-gradient(45deg, #ffffff, #f1f5f9);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .hero-subtitle {
            font-size: clamp(1.2rem, 3vw, 1.8rem);
            margin-bottom: 15px;
            opacity: 0.95;
            font-weight: 600;
            color: var(--secondary-orange);
        }
        
        .hero-description {
            font-size: clamp(1rem, 2vw, 1.2rem);
            max-width: 800px;
            margin: 0 auto 50px;
            opacity: 0.9;
            font-weight: 300;
            line-height: 1.7;
        }
        
        /* Stats Section */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 30px;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .stat-card {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            padding: 30px 20px;
            text-align: center;
            transition: all 0.3s ease;
        }
        
        .stat-card:hover {
            transform: translateY(-8px);
            background: rgba(255, 255, 255, 0.25);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .stat-number {
            font-size: 3rem;
            font-weight: 800;
            color: var(--secondary-orange);
            margin-bottom: 8px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .stat-label {
            font-size: 0.95rem;
            opacity: 0.9;
            font-weight: 500;
        }
        
        /* Filter Section */
        .filter-section {
            background: white;
            padding: 40px;
            margin: 60px 0 40px;
            border-radius: 25px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            border: 1px solid rgba(59, 130, 246, 0.1);
        }
        
        .filter-title {
            text-align: center;
            font-size: 1.5rem;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 30px;
        }
        
        .filter-buttons {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
        }
        
        .filter-btn {
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            border: 2px solid var(--primary-blue);
            color: var(--primary-blue);
            padding: 15px 25px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            text-transform: uppercase;
            font-size: 14px;
            letter-spacing: 0.5px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            position: relative;
            overflow: hidden;
        }
        
        .filter-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            transition: left 0.5s;
        }
        
        .filter-btn:hover::before {
            left: 100%;
        }
        
        .filter-btn:hover,
        .filter-btn.active {
            background: linear-gradient(135deg, var(--primary-blue) 0%, var(--dark-blue) 100%);
            color: white;
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(59, 130, 246, 0.4);
            border-color: var(--dark-blue);
        }
        
        /* Gallery Grid */
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
            gap: 30px;
            margin-bottom: 60px;
        }
        
        .gallery-card {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            border: 1px solid rgba(0, 0, 0, 0.05);
            position: relative;
        }
        
        .gallery-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 1;
        }
        
        .gallery-card:hover::before {
            opacity: 1;
        }
        
        .gallery-card:hover {
            transform: translateY(-12px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .image-container {
            position: relative;
            height: 280px;
            overflow: hidden;
        }
        
        .gallery-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .gallery-card:hover .gallery-image {
            transform: scale(1.08);
        }
        
        .category-badge {
            position: absolute;
            top: 20px;
            left: 20px;
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.95) 0%, rgba(29, 78, 216, 0.95) 100%);
            color: white;
            padding: 8px 16px;
            border-radius: 25px;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            z-index: 2;
            letter-spacing: 0.5px;
        }
        
        .card-content {
            padding: 30px;
            position: relative;
            z-index: 2;
        }
        
        .card-title {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: 12px;
            color: #1e293b;
            line-height: 1.3;
        }
        
        .card-description {
            color: #64748b;
            font-size: 15px;
            line-height: 1.6;
            margin-bottom: 20px;
        }
        
        .card-location {
            display: flex;
            align-items: center;
            color: #94a3b8;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 15px;
        }
        
        .location-icon {
            width: 16px;
            height: 16px;
            margin-right: 8px;
            opacity: 0.7;
        }
        
        .card-stats {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        
        .stat-tag {
            background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
            color: #475569;
            padding: 4px 10px;
            border-radius: 15px;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.3px;
        }
        
        /* Modal Enhancements */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            z-index: 9999;
            justify-content: center;
            align-items: center;
            padding: 20px;
            backdrop-filter: blur(5px);
        }
        
        .modal-content {
            background: white;
            border-radius: 25px;
            max-width: 1100px;
            width: 100%;
            max-height: 90vh;
            overflow: hidden;
            position: relative;
            display: grid;
            grid-template-columns: 1fr 1fr;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
            animation: modalSlideIn 0.3s ease-out;
        }
        
        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: scale(0.9) translateY(20px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }
        
        .modal-image {
            width: 100%;
            height: 500px;
            object-fit: cover;
        }
        
        .modal-info {
            padding: 40px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
        }
        
        .modal-category {
            background: linear-gradient(135deg, var(--primary-blue) 0%, var(--dark-blue) 100%);
            color: white;
            padding: 8px 16px;
            border-radius: 25px;
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            display: inline-block;
            margin-bottom: 20px;
            width: fit-content;
            letter-spacing: 0.5px;
        }
        
        .modal-title {
            font-size: 2.2rem;
            font-weight: 800;
            margin-bottom: 20px;
            color: #1e293b;
            line-height: 1.2;
        }
        
        .modal-description {
            color: #64748b;
            line-height: 1.7;
            margin-bottom: 25px;
            font-size: 16px;
        }
        
        .modal-location {
            display: flex;
            align-items: center;
            color: #64748b;
            font-weight: 600;
            font-size: 15px;
            margin-bottom: 20px;
        }
        
        .modal-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 20px;
        }
        
        .modal-tag {
            background: linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 100%);
            color: #0277bd;
            padding: 6px 12px;
            border-radius: 15px;
            font-size: 12px;
            font-weight: 600;
        }
        
        .close-btn {
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.95);
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .close-btn:hover {
            background: white;
            transform: scale(1.1);
        }
        
        /* Pagination */
        .pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            margin: 40px 0;
        }
        
        .pagination a,
        .pagination span {
            padding: 12px 16px;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        
        .pagination a {
            background: white;
            color: var(--primary-blue);
            border: 2px solid var(--primary-blue);
        }
        
        .pagination a:hover {
            background: var(--primary-blue);
            color: white;
            transform: translateY(-2px);
        }
        
        .pagination .current {
            background: var(--primary-blue);
            color: white;
            border: 2px solid var(--primary-blue);
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .container {
                padding: 0 15px;
            }
            
            .hero-section {
                padding: 80px 0;
            }
            
            .filter-section {
                padding: 30px 20px;
                margin: 40px 0 30px;
            }
            
            .filter-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .filter-btn {
                padding: 12px 20px;
                font-size: 12px;
                width: 100%;
                max-width: 200px;
            }
            
            .gallery-grid {
                grid-template-columns: 1fr;
                gap: 25px;
            }
            
            .modal-content {
                grid-template-columns: 1fr;
                max-height: 85vh;
                overflow-y: auto;
            }
            
            .modal-image {
                height: 300px;
            }
            
            .modal-info {
                padding: 30px 25px;
            }
            
            .modal-title {
                font-size: 1.8rem;
            }
            
            .stats-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 20px;
            }
        }
        
        /* Animation classes */
        .fade-in {
            animation: fadeIn 0.6s ease-in;
        }
        
        .slide-up {
            animation: slideUp 0.8s ease-out;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        /* Loading state */
        .loading {
            text-align: center;
            padding: 60px 20px;
            color: #64748b;
        }
        
        .no-results {
            text-align: center;
            padding: 80px 20px;
            color: #64748b;
        }
        
        .no-results h3 {
            font-size: 1.5rem;
            margin-bottom: 10px;
            color: #1e293b;
        }
    </style>
</head>
<body>
    <!-- Enhanced Hero Section -->
    <section class="hero-section">
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title"><?php echo htmlspecialchars($gallery_title); ?></h1>
                <div class="hero-subtitle"><?php echo htmlspecialchars($gallery_subtitle); ?></div>
                <p class="hero-description"><?php echo htmlspecialchars($gallery_description); ?></p>
                
                <!-- Enhanced Stats Grid -->
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-number">50+</div>
                        <div class="stat-label">Global Facilities</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">24/7</div>
                        <div class="stat-label">Operations</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">120+</div>
                        <div class="stat-label">Countries</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">1M+</div>
                        <div class="stat-label">Shipments</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Enhanced Filter Section -->
    <section class="container">
        <div class="filter-section">
            <h2 class="filter-title">Filter by Category</h2>
            <div class="filter-buttons">
                <?php foreach ($categories as $category): ?>
                    <a href="?category=<?php echo urlencode($category); ?>" 
                       class="filter-btn <?php echo $selected_category === $category ? 'active' : ''; ?>">
                        <?php echo htmlspecialchars($category); ?>
                    </a>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Enhanced Gallery Section -->
    <section class="container">
        <div class="gallery-grid">
            <?php if (!empty($paginated_images)): ?>
                <?php foreach ($paginated_images as $index => $image): ?>
                    <div class="gallery-card fade-in" 
                         style="animation-delay: <?php echo $index * 0.1; ?>s"
                         onclick="openModal(<?php echo $image['id']; ?>)">
                        <div class="image-container">
                            <img src="<?php echo htmlspecialchars($image['thumb']); ?>" 
                                 alt="<?php echo htmlspecialchars($image['title']); ?>"
                                 class="gallery-image"
                                 loading="lazy" />
                            <div class="category-badge">
                                <?php echo htmlspecialchars($image['category']); ?>
                            </div>
                        </div>
                        <div class="card-content">
                            <h3 class="card-title"><?php echo htmlspecialchars($image['title']); ?></h3>
                            <p class="card-description"><?php echo htmlspecialchars($image['description']); ?></p>
                            <div class="card-location">
                                <svg class="location-icon" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path>
                                </svg>
                                <?php echo htmlspecialchars($image['location']); ?>
                            </div>
                            <?php if (!empty($image['stats'])): ?>
                            <div class="card-stats">
                                <?php foreach ($image['stats'] as $stat): ?>
                                    <span class="stat-tag"><?php echo htmlspecialchars($stat); ?></span>
                                <?php endforeach; ?>
                            </div>
                            <?php endif; ?>
                        </div>
                    </div>
                <?php endforeach; ?>
            <?php else: ?>
                <div class="no-results">
                    <h3>No images found</h3>
                    <p>No images found for the selected category. Please try a different filter.</p>
                </div>
            <?php endif; ?>
        </div>

        <!-- Pagination -->
        <?php if ($total_pages > 1): ?>
        <div class="pagination">
            <?php if ($current_page > 1): ?>
                <a href="?category=<?php echo urlencode($selected_category); ?>&page=<?php echo $current_page - 1; ?>">&laquo; Previous</a>
            <?php endif; ?>
            
            <?php for ($i = 1; $i <= $total_pages; $i++): ?>
                <?php if ($i === $current_page): ?>
                    <span class="current"><?php echo $i; ?></span>
                <?php else: ?>
                    <a href="?category=<?php echo urlencode($selected_category); ?>&page=<?php echo $i; ?>"><?php echo $i; ?></a>
                <?php endif; ?>
            <?php endfor; ?>
            
            <?php if ($current_page < $total_pages): ?>
                <a href="?category=<?php echo urlencode($selected_category); ?>&page=<?php echo $current_page + 1; ?>">Next &raquo;</a>
            <?php endif; ?>
        </div>
        <?php endif; ?>
    </section>

    <!-- Enhanced Modal -->
    <div id="imageModal" class="modal">
        <div class="modal-content">
            <button onclick="closeModal()" class="close-btn" aria-label="Close modal">
                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>

            <div>
                <img id="modalImage" src="" alt="" class="modal-image" />
            </div>
            <div class="modal-info">
                <span id="modalCategory" class="modal-category"></span>
                <h2 id="modalTitle" class="modal-title"></h2>
                <p id="modalDescription" class="modal-description"></p>
                <div class="modal-location" id="modalLocationContainer">
                    <svg class="location-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path>
                    </svg>
                    <span id="modalLocation"></span>
                </div>
                <div id="modalTags" class="modal-tags"></div>
            </div>
        </div>
    </div>

    <!-- Enhanced JavaScript -->
    <script>
        // Image data for modal
        const images = <?php echo json_encode($gallery_images); ?>;
        
        function openModal(imageId) {
            const image = images.find(img => img.id === imageId);
            if (!image) return;
            
            document.getElementById('modalImage').src = image.src;
            document.getElementById('modalImage').alt = image.title;
            document.getElementById('modalCategory').textContent = image.category;
            document.getElementById('modalTitle').textContent = image.title;
            document.getElementById('modalDescription').textContent = image.description;
            document.getElementById('modalLocation').textContent = image.location;
            
            // Add tags if available
            const tagsContainer = document.getElementById('modalTags');
            tagsContainer.innerHTML = '';
            if (image.tags && image.tags.length > 0) {
                image.tags.forEach(tag => {
                    const tagElement = document.createElement('span');
                    tagElement.className = 'modal-tag';
                    tagElement.textContent = tag;
                    tagsContainer.appendChild(tagElement);
                });
            }
            
            document.getElementById('imageModal').style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
        
        function closeModal() {
            document.getElementById('imageModal').style.display = 'none';
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
        
        // Smooth scrolling for pagination
        document.querySelectorAll('.pagination a').forEach(link => {
            link.addEventListener('click', function(e) {
                document.querySelector('.filter-section').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });
        
        // Add scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);
        
        // Observe gallery cards
        document.querySelectorAll('.gallery-card').forEach(card => {
            observer.observe(card);
        });
        
        // Preload modal images for better performance
        images.forEach(image => {
            const img = new Image();
            img.src = image.src;
        });
        
        // Add loading state management
        document.addEventListener('DOMContentLoaded', function() {
            // Simulate loading for better UX
            setTimeout(() => {
                document.querySelectorAll('.gallery-card').forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }, 300);
        });
    </script>
</body>
</html>
