export async function generateSitemaps() {
  // Fetch the total number of products and calculate the number of sitemaps needed
  return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
}

// Hàm tạo ngày ngẫu nhiên giữa khoảng thời gian cho trước

function randomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export default async function sitemap({ id }: { id: number }) {
  const start = id * 5000;
  const limit = 5000;

  // Tạo dữ liệu giả
  const fakeData = Array.from({ length: limit }, (_, index) => ({
    slug: `san-pham-${start + index + 1}`,
    updated_at: randomDate(new Date(2023, 0, 1), new Date()),
    created_at: randomDate(new Date(2020, 0, 1), new Date(2022, 11, 31)),
  }));

  const product = fakeData.map((item) => ({
    url: `${process.env.NEXT_WEBSITE_URL}/product/${item.slug}`,
    lastModified: item.updated_at || item.created_at,
    changefreq: 'monthly',
    priority: 0.6,
  }));

  return [...product];
}
