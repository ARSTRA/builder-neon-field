<?php
/**
 * WordPress Gallery Plugin/Theme Integration
 * Add this to your WordPress theme's functions.php or create as a plugin
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Gallery Shortcode Function
 * Usage: [logistics_gallery category="all" columns="3"]
 */
function logistics_gallery_shortcode($atts) {
    $atts = shortcode_atts(array(
        'category' => 'all',
        'columns' => '3',
        'show_filter' => 'true',
        'show_modal' => 'true'
    ), $atts);

    // Gallery data
    $gallery_images = array(
        array(
            'id' => 1,
            'src' => 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop&auto=format&q=80',
            'title' => 'Boeing 747 Cargo Aircraft',
            'description' => 'Our fleet of modern cargo aircraft ensuring fast global delivery',
            'category' => 'Air Freight',
            'location' => 'Dubai International Airport',
            'thumb' => 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop&auto=format&q=80'
        ),
        array(
            'id' => 2,
            'src' => 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format&q=80',
            'title' => 'Container Ship Operations',
            'description' => 'Large-scale ocean freight operations handling thousands of containers',
            'category' => 'Ocean Freight',
            'location' => 'Port of Rotterdam',
            'thumb' => 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format&q=80'
        ),
        array(
            'id' => 3,
            'src' => 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop&auto=format&q=80',
            'title' => 'Ground Transport Fleet',
            'description' => 'Modern trucking fleet for reliable door-to-door delivery',
            'category' => 'Ground Transport',
            'location' => 'Distribution Center, USA',
            'thumb' => 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop&auto=format&q=80'
        ),
        array(
            'id' => 4,
            'src' => 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop&auto=format&q=80',
            'title' => 'Express Package Sorting',
            'description' => 'High-tech sorting facility for express delivery services',
            'category' => 'Express Delivery',
            'location' => 'Global Hub, Singapore',
            'thumb' => 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=300&fit=crop&auto=format&q=80'
        ),
        array(
            'id' => 5,
            'src' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&auto=format&q=80',
            'title' => 'Modern Warehouse Operations',
            'description' => 'State-of-the-art warehousing and storage facilities',
            'category' => 'Warehousing',
            'location' => 'London Distribution Center',
            'thumb' => 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&auto=format&q=80'
        ),
        array(
            'id' => 6,
            'src' => 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&auto=format&q=80',
            'title' => 'Cargo Loading Operations',
            'description' => 'Professional cargo handling and loading procedures',
            'category' => 'Air Freight',
            'location' => 'Frankfurt Cargo Hub',
            'thumb' => 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&auto=format&q=80'
        ),
        array(
            'id' => 7,
            'src' => 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&auto=format&q=80',
            'title' => 'International Port Operations',
            'description' => '24/7 port operations handling global trade',
            'category' => 'Ocean Freight',
            'location' => 'Port of Shanghai',
            'thumb' => 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&auto=format&q=80'
        ),
        array(
            'id' => 8,
            'src' => 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format&q=80',
            'title' => 'Cross-Border Trucking',
            'description' => 'Seamless cross-border transportation services',
            'category' => 'Ground Transport',
            'location' => 'US-Canada Border',
            'thumb' => 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format&q=80'
        ),
        array(
            'id' => 9,
            'src' => 'https://images.unsplash.com/photo-1593526613712-7b4b9a707330?w=800&h=600&fit=crop&auto=format&q=80',
            'title' => 'Last-Mile Delivery',
            'description' => 'Efficient last-mile delivery solutions for urban areas',
            'category' => 'Express Delivery',
            'location' => 'New York City',
            'thumb' => 'https://images.unsplash.com/photo-1593526613712-7b4b9a707330?w=400&h=300&fit=crop&auto=format&q=80'
        ),
        array(
            'id' => 10,
            'src' => 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop&auto=format&q=80',
            'title' => 'Cold Storage Facility',
            'description' => 'Temperature-controlled storage for sensitive cargo',
            'category' => 'Warehousing',
            'location' => 'Miami Cold Chain Hub',
            'thumb' => 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=300&fit=crop&auto=format&q=80'
        )
    );

    // Get unique categories
    $categories = array('All');
    foreach ($gallery_images as $image) {
        if (!in_array($image['category'], $categories)) {
            $categories[] = $image['category'];
        }
    }

    // Filter images
    $filtered_images = $atts['category'] === 'all' 
        ? $gallery_images 
        : array_filter($gallery_images, function($img) use ($atts) {
            return strtolower($img['category']) === strtolower($atts['category']);
        });

    // Generate unique ID for this gallery instance
    $gallery_id = 'gallery_' . uniqid();

    ob_start();
    ?>
    
    <div class="logistics-gallery" id="<?php echo $gallery_id; ?>">
        <?php if ($atts['show_filter'] === 'true'): ?>
        <!-- Category Filter -->
        <div class="gallery-filters" style="text-align: center; margin-bottom: 30px;">
            <?php foreach ($categories as $category): ?>
                <button class="filter-btn <?php echo strtolower($atts['category']) === strtolower($category) ? 'active' : ''; ?>" 
                        data-filter="<?php echo strtolower($category); ?>"
                        style="margin: 5px; padding: 10px 20px; border: 2px solid #3b82f6; background: <?php echo strtolower($atts['category']) === strtolower($category) ? '#3b82f6' : 'transparent'; ?>; color: <?php echo strtolower($atts['category']) === strtolower($category) ? 'white' : '#3b82f6'; ?>; border-radius: 25px; cursor: pointer; font-weight: 600; transition: all 0.3s ease;">
                    <?php echo esc_html($category); ?>
                </button>
            <?php endforeach; ?>
        </div>
        <?php endif; ?>

        <!-- Gallery Grid -->
        <div class="gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 30px;">
            <?php foreach ($filtered_images as $image): ?>
                <div class="gallery-item" 
                     data-category="<?php echo strtolower($image['category']); ?>"
                     style="background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; cursor: pointer;"
                     onclick="openGalleryModal('<?php echo $gallery_id; ?>', <?php echo $image['id']; ?>)">
                    
                    <div style="position: relative; overflow: hidden;">
                        <img src="<?php echo esc_url($image['thumb']); ?>" 
                             alt="<?php echo esc_attr($image['title']); ?>"
                             style="width: 100%; height: 250px; object-fit: cover; transition: transform 0.3s ease;"
                             onmouseover="this.style.transform='scale(1.05)'"
                             onmouseout="this.style.transform='scale(1)'" />
                        
                        <div style="position: absolute; top: 15px; left: 15px;">
                            <span style="background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); color: white; padding: 5px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; text-transform: uppercase;">
                                <?php echo esc_html($image['category']); ?>
                            </span>
                        </div>
                    </div>
                    
                    <div style="padding: 20px;">
                        <h3 style="font-size: 18px; font-weight: 700; color: #1f2937; margin-bottom: 10px; line-height: 1.4;">
                            <?php echo esc_html($image['title']); ?>
                        </h3>
                        <p style="color: #6b7280; font-size: 14px; line-height: 1.5; margin-bottom: 12px;">
                            <?php echo esc_html($image['description']); ?>
                        </p>
                        <div style="display: flex; align-items: center; color: #9ca3af; font-size: 12px;">
                            <svg style="width: 14px; height: 14px; margin-right: 5px;" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path>
                            </svg>
                            <?php echo esc_html($image['location']); ?>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

        <?php if ($atts['show_modal'] === 'true'): ?>
        <!-- Modal -->
        <div id="<?php echo $gallery_id; ?>_modal" class="gallery-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.8); z-index: 9999; justify-content: center; align-items: center; padding: 20px;">
            <div style="position: relative; max-width: 900px; width: 100%; background: white; border-radius: 15px; overflow: hidden;">
                <button onclick="closeGalleryModal('<?php echo $gallery_id; ?>')" 
                        style="position: absolute; top: 15px; right: 15px; z-index: 10; background: rgba(255, 255, 255, 0.9); border: none; border-radius: 50%; width: 40px; height: 40px; cursor: pointer; display: flex; align-items: center; justify-content: center;">
                    <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <div style="display: grid; grid-template-columns: 1fr 1fr;">
                    <div>
                        <img id="<?php echo $gallery_id; ?>_modal_image" src="" alt="" style="width: 100%; height: 400px; object-fit: cover;" />
                    </div>
                    <div style="padding: 30px;">
                        <span id="<?php echo $gallery_id; ?>_modal_category" style="background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); color: white; padding: 5px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; text-transform: uppercase; display: inline-block; margin-bottom: 15px;"></span>
                        <h2 id="<?php echo $gallery_id; ?>_modal_title" style="font-size: 24px; font-weight: 700; color: #1f2937; margin-bottom: 15px; line-height: 1.3;"></h2>
                        <p id="<?php echo $gallery_id; ?>_modal_description" style="color: #6b7280; line-height: 1.6; margin-bottom: 20px;"></p>
                        <div style="display: flex; align-items: center; color: #6b7280;">
                            <svg style="width: 16px; height: 16px; margin-right: 8px;" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path>
                            </svg>
                            <span id="<?php echo $gallery_id; ?>_modal_location" style="font-weight: 600;"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php endif; ?>
    </div>

    <script>
        // Gallery data for this instance
        window.galleryData = window.galleryData || {};
        window.galleryData['<?php echo $gallery_id; ?>'] = <?php echo json_encode($gallery_images); ?>;

        // Filter functionality
        document.addEventListener('DOMContentLoaded', function() {
            const gallery = document.getElementById('<?php echo $gallery_id; ?>');
            const filterBtns = gallery.querySelectorAll('.filter-btn');
            const galleryItems = gallery.querySelectorAll('.gallery-item');

            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const filter = this.getAttribute('data-filter');
                    
                    // Update active button
                    filterBtns.forEach(b => {
                        b.classList.remove('active');
                        b.style.background = 'transparent';
                        b.style.color = '#3b82f6';
                    });
                    this.classList.add('active');
                    this.style.background = '#3b82f6';
                    this.style.color = 'white';
                    
                    // Filter items
                    galleryItems.forEach(item => {
                        if (filter === 'all' || item.getAttribute('data-category') === filter) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
        });

        // Modal functionality
        function openGalleryModal(galleryId, imageId) {
            const images = window.galleryData[galleryId];
            const image = images.find(img => img.id === imageId);
            if (!image) return;
            
            document.getElementById(galleryId + '_modal_image').src = image.src;
            document.getElementById(galleryId + '_modal_image').alt = image.title;
            document.getElementById(galleryId + '_modal_category').textContent = image.category;
            document.getElementById(galleryId + '_modal_title').textContent = image.title;
            document.getElementById(galleryId + '_modal_description').textContent = image.description;
            document.getElementById(galleryId + '_modal_location').textContent = image.location;
            
            document.getElementById(galleryId + '_modal').style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
        
        function closeGalleryModal(galleryId) {
            document.getElementById(galleryId + '_modal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        // Close modal on backdrop click
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('gallery-modal')) {
                e.target.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    </script>

    <?php
    return ob_get_clean();
}

// Register the shortcode
add_shortcode('logistics_gallery', 'logistics_gallery_shortcode');

/**
 * Enqueue gallery styles and scripts
 */
function logistics_gallery_enqueue_scripts() {
    wp_enqueue_script('logistics-gallery', get_template_directory_uri() . '/js/logistics-gallery.js', array('jquery'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'logistics_gallery_enqueue_scripts');

/**
 * Admin page for managing gallery
 */
function logistics_gallery_admin_page() {
    add_menu_page(
        'Logistics Gallery',
        'Gallery',
        'manage_options',
        'logistics-gallery',
        'logistics_gallery_admin_page_content',
        'dashicons-format-gallery',
        30
    );
}
add_action('admin_menu', 'logistics_gallery_admin_page');

function logistics_gallery_admin_page_content() {
    ?>
    <div class="wrap">
        <h1>Logistics Gallery Settings</h1>
        <p>Use the shortcode <code>[logistics_gallery]</code> to display the gallery on any page or post.</p>
        
        <h2>Shortcode Options:</h2>
        <ul>
            <li><strong>category</strong>: Filter by specific category (default: "all")</li>
            <li><strong>columns</strong>: Number of columns (default: "3")</li>
            <li><strong>show_filter</strong>: Show category filter buttons (default: "true")</li>
            <li><strong>show_modal</strong>: Enable image modal popup (default: "true")</li>
        </ul>
        
        <h2>Examples:</h2>
        <p><code>[logistics_gallery category="Air Freight" columns="2"]</code></p>
        <p><code>[logistics_gallery show_filter="false" show_modal="false"]</code></p>
    </div>
    <?php
}
?>
