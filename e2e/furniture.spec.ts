import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero section with Drupal content', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toContainText('Furniture Built to Last')
    await expect(page.locator('text=Handcrafted Solid Wood')).toBeVisible()
  })

  test('renders stats section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=40+')).toBeVisible()
    await expect(page.locator('text=Years of Craft')).toBeVisible()
  })

  test('renders CTA section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=Visit Our Showroom')).toBeVisible()
  })
})

test.describe('Collections', () => {
  test('lists product lines from Drupal', async ({ page }) => {
    await page.goto('/collections')
    await expect(page.locator('h1')).toContainText('Collections')
    await expect(page.locator('h3:has-text("Vermont Modern")')).toBeVisible()
    await expect(page.locator('h3:has-text("Farmstead")')).toBeVisible()
    await expect(page.locator('h3:has-text("Studio")')).toBeVisible()
  })

  test('detail page renders via slug route', async ({ page }) => {
    await page.goto('/collections/vermont-modern')
    await expect(page.locator('h1')).toContainText('Vermont Modern')
  })
})

test.describe('Inspiration', () => {
  test('lists room inspirations from Drupal', async ({ page }) => {
    await page.goto('/inspiration')
    await expect(page.locator('h1')).toContainText('Room Inspirations')
    await expect(page.locator('text=Modern Living Room')).toBeVisible()
    await expect(page.locator('text=Farmhouse Dining Room')).toBeVisible()
  })
})

test.describe('Designers', () => {
  test('lists designers from Drupal', async ({ page }) => {
    await page.goto('/designers')
    await expect(page.locator('h1')).toContainText('Designers')
    await expect(page.locator('text=Anna Lindberg')).toBeVisible()
    await expect(page.locator('text=Robert Kessler')).toBeVisible()
    await expect(page.locator('text=Mei Tanaka')).toBeVisible()
  })
})

test.describe('Static pages', () => {
  test('about page renders', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toContainText('About Hearthwood')
  })

  test('contact page renders', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.locator('h1')).toContainText('Contact Us')
  })
})

test.describe('Navigation', () => {
  test('header links work', async ({ page }) => {
    await page.goto('/')
    await page.locator('a[href="/collections"]').first().click()
    await expect(page).toHaveURL('/collections')
    await expect(page.locator('h1')).toContainText('Collections')
  })
})
