<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the "site-content" div and all content after.
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
?>
</div>
</div><!-- .site-content -->

	<footer id="colophon" class="page-footer">
		<div class="page-footer__inner">
			<?php
				/**
				 * Fires before the Twenty Fifteen footer text for footer customization.
				 *
				 * @since Twenty Fifteen 1.0
				 */
				do_action( 'twentyfifteen_credits' );
			?>
		</div>
	</footer>

</div><!-- .site -->

<?php wp_footer(); ?>

</body>
</html>
