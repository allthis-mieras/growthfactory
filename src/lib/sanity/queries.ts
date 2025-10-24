// GROQ queries for Sanity CMS

// Homepage content query with blocks
export const getHomepageQuery = `
  *[_type == "homepage"][0] {
    pageBlocks[] {
      _type,
      _key,
      // Hero Block
      title,
      subtitle,
      description,
      ctaText,
      ctaLink,
      backgroundImage {
        asset-> {
          _id,
          url,
          metadata {
            dimensions
          }
        },
        alt
      },
      variant,
      // List Block
      items,
      description,
      layout,
      ctaText,
      ctaLink,
      image {
        asset-> {
          _id,
          url,
          metadata {
            dimensions
          }
        },
        alt
      },
      imagePosition,
      // Testimonial Block
      title,
      testimonials[]-> {
        _id,
        quote,
        author,
        company,
        role,
        image {
          asset-> {
            _id,
            url,
            metadata {
              dimensions
            }
          },
          alt
        },
        rating,
        featured,
        category,
        orderRank
      } | order(orderRank),
      displayMode,
      layout,
      showRating,
      showImage,
      // Process Block
      steps[]-> {
        _id,
        number,
        title,
        description,
        icon {
          asset-> {
            _id,
            url,
            metadata {
              dimensions
            }
          },
          alt
        },
        orderRank
      } | order(orderRank),
      layout,
      // Team Block
      members[]-> {
        _id,
        name,
        role,
        bio,
        image {
          asset-> {
            _id,
            url,
            metadata {
              dimensions
            }
          },
          alt
        },
        linkedinUrl,
        orderRank
      } | order(orderRank),
      // CTA Block
      primaryCtaText,
      primaryCtaLink,
      secondaryCtaText,
      secondaryCtaLink,
      backgroundStyle,
      // Content Block
      content,
      imagePosition
    }
  }
`;

// Team members query
export const getTeamMembersQuery = `
  *[_type == "teamMember"] | order(orderRank) {
    _id,
    name,
    role,
    bio,
    image {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    },
    linkedinUrl,
    orderRank
  }
`;

// Process steps query
export const getProcessStepsQuery = `
  *[_type == "processStep"] | order(orderRank) {
    _id,
    number,
    title,
    description,
    icon {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    },
    orderRank
  }
`;

// Testimonials query
export const getTestimonialsQuery = `
  *[_type == "testimonial"] | order(orderRank) {
    _id,
    quote,
    author,
    company,
    role,
    image {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    },
    rating,
    featured,
    category,
    orderRank
  }
`;

// Blog posts query (for future use)
export const getPostsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    },
    author-> {
      name,
      image {
        asset-> {
          url
        }
      }
    },
    categories
  }
`;

// Single blog post query
export const getPostQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    body,
    mainImage {
      asset-> {
        _id,
        url,
        metadata {
          dimensions
        }
      },
      alt
    },
    author-> {
      name,
      role,
      image {
        asset-> {
          url
        }
      }
    },
    categories,
    seoTitle,
    seoDescription
  }
`;

// Combined homepage data query
export const getHomepageDataQuery = `
  {
    "homepage": ${getHomepageQuery},
    "teamMembers": ${getTeamMembersQuery},
    "processSteps": ${getProcessStepsQuery}
  }
`;
