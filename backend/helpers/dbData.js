// include mysql module
var mysql = require('mysql');

// create a connection variable with the required details
var con = mysql.createConnection({
    host: "localhost",    // ip address of server running mysql
    user: "root",    // user name to your mysql database
    password: "fabrix", // corresponding mysql password
    database: "fabrix" // use the specified database name
});

// make to connection to the database.
con.connect(function(err) {
    if (err) throw err;
    // if connection is successful
    var records = [
        //id, category_name, parent_category, has_degree, degree_title, degree_type, createdAt, updatedAt
        [1, 'Main Categories', , false, , , '2021-01-24 21:05:34', '2021-01-24 21:05:34'],
        [2, 'Material Composition', 1, false, , , '2021-01-24 21:06:34', '2021-01-24 21:06:34'],
        [3, 'Natural material', 2, false, , , '2021-01-24 21:07:34', '2021-01-24 21:07:34'],
        [4, 'Alpaca', 3, true, '%', 'float', '2021-01-24 21:08:34', '2021-01-24 21:08:34'],
        [5, 'Casein', 3, true, '%', 'float', '2021-01-24 21:09:34', '2021-01-24 21:09:34'],
        [6, 'Cashmere', 3, true, '%', 'float', '2021-01-24 21:09:34', '2021-01-24 21:09:34'],
        [7, 'Cotton', 3, true, '%', 'float', '2021-01-24 21:09:34', '2021-01-24 21:09:34'],
        [8, 'Fur', 3, true, '%', 'float', '2021-01-24 21:09:34', '2021-01-24 21:09:34'],
        [9, 'Hemp', 3, true, '%', 'float', '2021-01-24 21:09:34', '2021-01-24 21:09:34'],
        [10, 'Jute', 3, true, '%', 'float', '2021-01-24 21:09:34', '2021-01-24 21:09:34'],
        [11, 'Leather', 3, true, '%', 'float', '2021-01-24 21:09:34', '2021-01-24 21:09:34'],
        [12, 'Linen', 3, true, '%', 'float', '2021-01-24 21:10:34', '2021-01-24 21:10:34'],
        [13, 'Lyocell', 3, true, '%', 'float', '2021-01-24 21:10:34', '2021-01-24 21:10:34'],
        [14, 'Modal', 3, true, '%', 'float', '2021-01-24 21:10:34', '2021-01-24 21:10:34'],
        [15, 'Mohair', 3, true, '%', 'float', '2021-01-24 21:10:34', '2021-01-24 21:10:34'],
        [16, 'Ramie', 3, true, '%', 'float', '2021-01-24 21:10:34', '2021-01-24 21:10:34'],
        [17, 'Silk', 3, true, '%', 'float', '2021-01-24 21:10:34', '2021-01-24 21:10:34'],
        [18, 'Soy', 3, true, '%', 'float', '2021-01-24 21:10:34', '2021-01-24 21:10:34'],
        [19, 'Viscose', 3, true, '%', 'float', '2021-01-24 21:10:34', '2021-01-24 21:10:34'],
        [20, 'Wool (sheep)', 3, true, '%', 'float', '2021-01-24 21:10:34', '2021-01-24 21:10:34'],
        [21, 'Synthetic fibre', 2, false, , , '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [22, 'Elastane', 21, true, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [23, 'Elastolefin', 21, true, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [24, 'Polyacrylic', 21, true, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [25, 'Polyamide', 21, true, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [26, 'Polyester', 21, true, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [27, 'Other', 2, false, , , '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [28, 'Aramid', 27, true, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [29, 'Glas', 27, true, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [30, '3D Program', 1, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [31, 'Lectra Modaris', 30, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [32, 'Assyst Vidya', 30, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [33, 'CLO3D', 30, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [34, 'Browzwear VStitcher', 30, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [35, 'Product Group', 1, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [36, 'Accessoires', 35, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [37, 'Beachwear', 35, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [38, 'Business Wear', 35, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [39, 'Casual Wear', 35, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [40, 'Costumes/ Traditional', 35, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [41, 'Outer Wear', 35, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [42, 'Sleepwear/ Loungewear', 35, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [43, 'Sportswear', 35, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [44, 'Underwear', 35, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [45, 'Workwear/ PSA', 35, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [46, 'Weight', 1, true, 'g/m²', 'float', '2021-01-24 21:13:34', '2021-01-24 21:13:34'],
        [47, 'Surface Look', 1, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [48, 'Weave', 47, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [49, 'Plain Weave', 48, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [50, 'Twill Weave', 48, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [51, 'Satin Weave', 48, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [52, 'Jacquard Weave', 48, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [53, 'Knit', 47, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [54, 'Circular Knit', 53, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [55, 'Flat Knit ', 53, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [56, 'Warp Knit', 53, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [57, 'Cuff Material', 53, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [58, 'Non-woven', 47, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [59, 'Thickness', 1, true, 'mm', 'float', '2021-01-24 21:13:34', '2021-01-24 21:13:34'],
        [60, 'Sub-categories', , false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [61, 'Opacity', 60, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [62, 'transparent', 61, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [63, 'mid-transparent', 61, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [64, 'not transparent', 61, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [65, 'Drape-Coefficient', 60, true, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [66, 'Commercial Fabric Name', 60, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [67, 'Chenille', 66, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [68, 'Corduroy', 66, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [69, 'Crêpe', 66, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [70, 'Denim', 66, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [71, 'Flannel', 66, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [72, 'Lace', 66, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [73, 'Plissé', 66, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [74, 'Plush', 66, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [75, 'Rib', 66, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [76, 'Sersucker', 66, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [77, 'Terry', 66, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [78, 'Velvet ', 66, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [79, 'Velour', 66, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [80, 'Elasticity', 60, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [81, 'Total elongation mean', 80, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [82, 'Longitudinal', 81, true, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [83, 'Cross', 81, true, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [84, 'Remaining stretch immediately after removal', 80, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [85, 'Longitudinal', 84, true, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [86, 'Cross', 84, true, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [87, 'Remaining elongation after recovery 1h', 80, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [88, 'Longitudinal', 87, true, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [89, 'Cross', 87, true, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [90, 'Elongation', 60, false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [91, '(FH) maximum tensile strength Mean value in N chain', 90, true, 'N', 'int', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [92, '(FH) maximum tensile strength Mean value in N shots', 90, true, 'N', 'int', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [93, 'Additional info', , false, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [94, 'Abrasion Resistance', 93, true, 'Abrasion resistance <${degree} abrasion cycles', 'int', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [95, 'Burst pressure', 93, true, , 'int', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [96, 'Care instructions', 93, false, , , '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [97, 'Density', 96, true, , 'int', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [98, 'Electrical charge', 96, true, , 'int', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [99, 'Finishing', 96, true, , 'String', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [100, 'Pilling', 96, true, 'Final score after 7000 tours', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [101, 'Shrinkage', 96, true, , 'int', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [102, 'Sustainability', 96, true, , 'String', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [103, 'Tensile strength', 96, true, , 'int', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [104, 'Offerer', 93, true, , 'String', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [105, 'Number of threads per unit length', 93, false, , , '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [106, 'Number of threads per cm²', 105, true, , 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [107, 'Number of weft threads', 105, true, , 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [108, 'Number of warp threads', 105, true, , 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [109, 'Number of stitches per unit length', 93, false, , , '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [110, 'Number of meshes per cm²', 109, true, , 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [111, 'Number of wales', 109, true, , 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [112, 'Number of rows of stitches', 109, true, , 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [113, 'Code', 93, true, , 'String', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        /**
        [1, 'Main Categories', , 0, , , '2021-01-24 21:05:34', '2021-01-24 21:05:34'],
        [2, 'Material Composition', 1, 0, , , '2021-01-24 21:06:34', '2021-01-24 21:06:34'],
        [3, 'Natural material', 2, 0, , , '2021-01-24 21:07:34', '2021-01-24 21:07:34'],
        [4, 'Alpaca', 3, 1, '%', 'float', '2021-01-24 21:08:34', '2021-01-24 21:08:34'],
        [5, 'Casein', 3, 1, '%', 'float', '2021-01-24 21:09:34', '2021-01-24 21:09:34'],
        [6, 'Cashmere', 3, 1, '%', 'float', '2021-01-24 21:09:34', '2021-01-24 21:09:34'],
        [7, 'Cotton', 3, 1, '%', 'float', '2021-01-24 21:09:34', '2021-01-24 21:09:34'],
        [8, 'Fur', 3, 1, '%', 'float', '2021-01-24 21:09:34', '2021-01-24 21:09:34'],
        [9, 'Hemp', 3, 1, '%', 'float', '2021-01-24 21:09:34', '2021-01-24 21:09:34'],
        [10, 'Jute', 3, 1, '%', 'float', '2021-01-24 21:09:34', '2021-01-24 21:09:34'],
        [11, 'Leather', 3, 1, '%', 'float', '2021-01-24 21:09:34', '2021-01-24 21:09:34'],
        [12, 'Linen', 3, 1, '%', 'float', '2021-01-24 21:10:34', '2021-01-24 21:10:34'],
        [13, 'Lyocell', 3, 1, '%', 'float', '2021-01-24 21:10:34', '2021-01-24 21:10:34'],
        [14, 'Modal', 3, 1, '%', 'float', '2021-01-24 21:10:34', '2021-01-24 21:10:34'],
        [15, 'Mohair', 3, 1, '%', 'float', '2021-01-24 21:10:34', '2021-01-24 21:10:34'],
        [16, 'Ramie', 3, 1, '%', 'float', '2021-01-24 21:10:34', '2021-01-24 21:10:34'],
        [17, 'Silk', 3, 1, '%', 'float', '2021-01-24 21:10:34', '2021-01-24 21:10:34'],
        [18, 'Soy', 3, 1, '%', 'float', '2021-01-24 21:10:34', '2021-01-24 21:10:34'],
        [19, 'Viscose', 3, 1, '%', 'float', '2021-01-24 21:10:34', '2021-01-24 21:10:34'],
        [20, 'Wool (sheep)', 3, 1, '%', 'float', '2021-01-24 21:10:34', '2021-01-24 21:10:34'],
        [21, 'Synthetic fibre', 2, 0, , , '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [22, 'Elastane', 21, 1, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [23, 'Elastolefin', 21, 1, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [24, 'Polyacrylic', 21, 1, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [25, 'Polyamide', 21, 1, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [26, 'Polyester', 21, 1, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [27, 'Other', 2, 0, , , '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [28, 'Aramid', 27, 1, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [29, 'Glas', 27, 1, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [30, '3D Program', 1, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [31, 'Lectra Modaris', 30, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [32, 'Assyst Vidya', 30, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [33, 'CLO3D', 30, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [34, 'Browzwear VStitcher', 30, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [35, 'Product Group', 1, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [36, 'Accessoires', 35, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [37, 'Beachwear', 35, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [38, 'Business Wear', 35, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [39, 'Casual Wear', 35, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [40, 'Costumes/ Traditional', 35, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [41, 'Outer Wear', 35, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [42, 'Sleepwear/ Loungewear', 35, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [43, 'Sportswear', 35, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [44, 'Underwear', 35, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [45, 'Workwear/ PSA', 35, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [46, 'Weight', 1, 1, 'g/m²', 'float', '2021-01-24 21:13:34', '2021-01-24 21:13:34'],
        [47, 'Surface Look', 1, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [48, 'Weave', 47, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [49, 'Plain Weave', 48, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [50, 'Twill Weave', 48, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [51, 'Satin Weave', 48, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [52, 'Jacquard Weave', 48, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [53, 'Knit', 47, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [54, 'Circular Knit', 53, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [55, 'Flat Knit ', 53, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [56, 'Warp Knit', 53, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [57, 'Cuff Material', 53, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [58, 'Non-woven', 47, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [59, 'Thickness', 1, 1, 'mm', 'float', '2021-01-24 21:13:34', '2021-01-24 21:13:34'],
        [60, 'Sub-categories', , 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [61, 'Opacity', 60, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [62, 'transparent', 61, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [63, 'mid-transparent', 61, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [64, 'not transparent', 61, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [65, 'Drape-Coefficient', 60, 1, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [66, 'Commercial Fabric Name', 60, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [67, 'Chenille', 66, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [68, 'Corduroy', 66, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [69, 'Crêpe', 66, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [70, 'Denim', 66, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [71, 'Flannel', 66, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [72, 'Lace', 66, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [73, 'Plissé', 66, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [74, 'Plush', 66, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [75, 'Rib', 66, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [76, 'Sersucker', 66, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [77, 'Terry', 66, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [78, 'Velvet ', 66, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [79, 'Velour', 66, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [80, 'Elasticity', 60, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [81, 'Total elongation mean', 80, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [82, 'Longitudinal', 81, 1, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [83, 'Cross', 81, 1, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [84, 'Remaining stretch immediately after removal', 80, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [85, 'Longitudinal', 84, 1, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [86, 'Cross', 84, 1, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [87, 'Remaining elongation after recovery 1h', 80, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [88, 'Longitudinal', 87, 1, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [89, 'Cross', 87, 1, '%', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [90, 'Elongation', 60, 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [91, '(FH) maximum tensile strength Mean value in N chain', 90, 1, 'N', 'int', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [92, '(FH) maximum tensile strength Mean value in N shots', 90, 1, 'N', 'int', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [93, 'Additional info', , 0, , , '2021-01-24 21:12:34', '2021-01-24 21:12:34'],
        [94, 'Abrasion Resistance', 93, 1, 'Abrasion resistance <${degree} abrasion cycles', 'int', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [95, 'Burst pressure', 93, 1, , 'int', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [96, 'Care instructions', 93, 0, , , '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [97, 'Density', 96, 1, , 'int', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [98, 'Electrical charge', 96, 1, , 'int', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [99, 'Finishing', 96, 1, , 'String', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [100, 'Pilling', 96, 1, 'Final score after 7000 tours', 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [101, 'Shrinkage', 96, 1, , 'int', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [102, 'Sustainability', 96, 1, , 'String', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [103, 'Tensile strength', 96, 1, , 'int', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [104, 'Offerer', 93, 1, , 'String', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [105, 'Number of threads per unit length', 93, 0, , , '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [106, 'Number of threads per cm²', 105, 1, , 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [107, 'Number of weft threads', 105, 1, , 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [108, 'Number of warp threads', 105, 1, , 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [109, 'Number of stitches per unit length', 93, 0, , , '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [110, 'Number of meshes per cm²', 109, 1, , 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [111, 'Number of wales', 109, 1, , 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [112, 'Number of rows of stitches', 109, 1, , 'float', '2021-01-24 21:11:34', '2021-01-24 21:11:34'],
        [113, 'Code', 93, 1, , 'String', '2021-01-24 21:11:34', '2021-01-24 21:11:34'], **/
    ];
    con.query("INSERT INTO categories (id, category_name, parent_category, has_degree, degree_title, degree_type, createdAt, updatedAt) VALUES ?", [records], function (err, result, fields) {
        // if any error while executing above query, throw error
        if (err) throw err;
        // if there is no error, you have the result
        console.log(result);
    });
});