export function sanityImageUrl(imageRef: string, width = 800, height = 600) {
  const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
  const dataset = import.meta.env.PUBLIC_SANITY_DATASET;

  if (!imageRef) return "";

  const parts = imageRef.split("-");
  if (parts.length < 3) return "";

  const imageId = `${parts[1]}-${parts[2]}.${parts[3]}`;

  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${imageId}?w=${width}&h=${height}`;
}