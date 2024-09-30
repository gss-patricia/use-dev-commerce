export async function subscribeToNewsletter(email: string): Promise<void> {
  console.log(`Inscrevendo ${email} na newsletter`);

  await new Promise((resolve) => setTimeout(resolve, 1000));
}
