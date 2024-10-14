import { test, expect } from '@playwright/test'

test('Hero section works correctly', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('/')

  // Assert that the logo is visible and has the correct link
  const logoLink = page.getByRole('link', { name: /tung homes/i })
  await expect(logoLink).toBeVisible()

  // Assert that the hero heading contains the expected text
  const heroHeading = page.locator('h1')
  await expect(heroHeading).toContainText(/Building More Than Your Dream Home/i)

  // Assert that the call-to-action button is visible
  const ctaButton = page.getByRole('link', { name: /talk to our team/i })
  await expect(ctaButton).toBeVisible()

  // Click on the logo and verify navigation
  await logoLink.click()
  await page.waitForURL('/')

  // Ensure that after the click, the URL is correct and the page content remains visible
  await expect(page).toHaveURL('/')
  await expect(heroHeading).toBeVisible()
})

test('Projects section works correctly', async ({ page }) => {
  await page.goto('/')

  // Verify the heading of the projects section
  const homesHeading = page.locator('h2')
  await expect(homesHeading).toContainText(
    /Beautifully Built and Crafted with Care/i,
  )

  // Check the visibility of navigation buttons
  const prevBtn = page.getByRole('button', { name: /Previous slide/i })
  const nextBtn = page.getByRole('button', { name: /Next slide/i })
  await expect(prevBtn).toBeVisible()
  await expect(nextBtn).toBeVisible()

  // Get carousel items and assert their count
  const carouselItems = page.getByRole('link', { name: /project\s\d+:\s.+/i })
  const itemCount = await carouselItems.count()
  expect(itemCount).toBeGreaterThanOrEqual(4)

  // Assert all carousel items are visible
  for (let i = 0; i < itemCount; i++) {
    await expect(carouselItems.nth(i)).toBeVisible()
  }

  // Verify initial items in viewport
  await nextBtn.scrollIntoViewIfNeeded()
  await Promise.all([
    expect(carouselItems.nth(0)).toBeInViewport(),
    expect(carouselItems.nth(1)).toBeInViewport(),
    expect(carouselItems.nth(itemCount - 1)).not.toBeInViewport(),
  ])

  // Click next and assert the first item is no longer in the viewport
  await nextBtn.click()
  await expect(carouselItems.nth(0)).not.toBeInViewport()

  // Click previous and assert the first item is back in the viewport
  await prevBtn.click()
  await expect(carouselItems.nth(0)).toBeInViewport()

  // Click through the carousel to the last item
  for (let i = 0; i < itemCount - 1; i++) {
    await nextBtn.click()
  }

  // Assert the last item is in viewport
  await expect(carouselItems.nth(itemCount - 1)).toBeInViewport()

  // Click next and assert the last item is no longer in the viewport
  await nextBtn.click()
  await expect(carouselItems.nth(itemCount - 1)).not.toBeInViewport()
})
