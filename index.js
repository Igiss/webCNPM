document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleBtn");

  // Khởi tạo feather icons
  feather.replace();

  // Xử lý sự kiện click nút toggle
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
  });

  // Tự động thu gọn trên mobile
  function handleResize() {
    if (window.innerWidth < 768) {
      sidebar.classList.add("collapsed");
    } else {
      sidebar.classList.remove("collapsed");
    }
  }

  // Kiểm tra kích thước màn hình khi tải trang
  handleResize();

  // Theo dõi thay đổi kích thước màn hình
  window.addEventListener("resize", handleResize);
});
