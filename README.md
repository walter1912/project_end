# HN-PRA13-FE-PR1-THAI-HUNG
PROJECT: WEB MUA BÁN MÁY CÔNG CỤ

 # I. PHÂN TÍCH GIAO DIỆN 
   ##  CÁC GIAO DIỆN CHÍNH: 

        1. HomePage 
            Có layout chuẩn: header, footer 
            - Các component con: 
                1.1 banner 
                1.2 Sản phẩm nổi bật 
                1.3 Sản phẩm mới 
                1.4 Sản phẩm bán chạy 
                1.5 Hàng mới về
        2. AllItemListPage 
            Phần side bar bên trái dùng chung cho cả ALLItemGridPage:
                - Danh mục sản phẩm
                - Tìm theo mức giá
                - Tìm theo màu sắc
                - Sản phẩm khuyến mãi 
            Phần list Item ở bên phải: 
                mỗi Item chứa: 
                - Ảnh 
                - Giá bán
                - Tên sản phẩm 
                - số sao đánh giá
                - mô tả sản phẩm 
                - button mua ngay 
                - button xem chi tiết => chuyển tới trang ItemDetailPage
            - Phân trang
        3. AllItemGridPage 
            Tương tự trang AllItemGridPage nhưng mỗi Item không có button và mô tả sản phẩm 
            - layout dạng lưới
        4. ItemDetailPage 
            Phần side bar dùng chung: 
            - Danh mục sản phẩm 
            - Sản phẩm khuyến mãi
            Phần mô tả tổng quan sản phẩm:
                - layout ảnh 
                - khung chọn mua sản phẩm 
            Phần thông tin chi tiết:
                - thông tin sản phẩm 
                - đánh giá - nhận xét 
                - thẻ tags
            Phần sản phẩm tương tự: 
                - list random sản phẩm tương tự (cùng thẻ tag)
        5. Register 
            Có layout chuẩn: header, footer 
            - form đăng ký
        6. Login 
            Có layout chuẩn: header, footer 
            - form đăng nhập
        7. AllBlogPage 
             Có layout chuẩn: header, footer 
             Phần side bar dùng chung: 
                 - Danh mục sản phẩm 
                 - Danh muc tin tức 
                 - Thư viện ảnh 
                 - Thẻ tag
            Danh sách bài viết dạng list 
            Phân trang 
        8. BlogDetailPage 
             Có layout chuẩn: header, footer 
             Phần side bar dùng chung: 
                 - Danh mục sản phẩm 
                 - Danh muc tin tức 
                 - Thư viện ảnh 
                 - Thẻ tag
            Bài viết: 
            Chi tiết bài viết:
                - title 
                - ảnh bìa  
                - ngày tạo
                - người tạo
                - số bình luận 
                - nội dung 
                - các thẻ tag
                - các nút chia sẻ
            Danh sách các bình luận 
            Form bình luận
        9. ShoppingCartPage 
            Có layout chuẩn: header, footer 
            List sản phẩm bạn đã thêm vào giỏ hàng(nên có phân trang)
            Form Thanh toán
        10.NotFound
            Có layout chuẩn: header, footer 

        - trang chủ (vì trang chủ nhiều phần con nên code lâu).
        - các trang sản phẩm (2 trang list, chi tiết sản phẩm).
        - các trang blog (2 trang blog).
        - login, register, 404 page, shopping cart

        - dùng bootstrap, fontawesome, scss, pug 
        - BEM , reset CSS
