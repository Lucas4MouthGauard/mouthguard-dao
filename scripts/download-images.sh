#!/bin/bash

# 创建目录
mkdir -p public/researchers public/institutions

# 下载研究人员头像
curl -o public/researchers/researcher1.jpg "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop"
curl -o public/researchers/researcher2.jpg "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop"
curl -o public/researchers/researcher3.jpg "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop"
curl -o public/researchers/researcher4.jpg "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&h=200&fit=crop"

# 下载研究倡议图片 - 使用口腔健康研究相关的专业图片
curl -o public/research-hero.jpg "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=800&fit=crop"

# 下载机构 logo（使用占位图片）
curl -o public/institutions/harvard.png "https://placehold.co/200x200/1a365d/ffffff?text=Harvard"
curl -o public/institutions/stanford.png "https://placehold.co/200x200/8b0000/ffffff?text=Stanford"
curl -o public/institutions/mit.png "https://placehold.co/200x200/8a2be2/ffffff?text=MIT" 